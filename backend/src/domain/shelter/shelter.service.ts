import { Injectable, Logger } from '@nestjs/common';
import { ShelterInfoRepository } from './shelter_info.repository';
import { ShelterChecklistAnswerRepository } from './shelter_checklist_answer.repository';
import { ShelterChecklistQuestionRepository } from './shelter_checklist_question.repository';
import { ShelterChecklistQuestion } from 'src/entity/shelter_checklist_question.entity';
import { AnswerDto } from './dto/answer.dto';
import { User } from 'src/entity/user.entity';
import { ShelterInfo } from 'src/entity/shelter_info.entity';
import { AnswerArrayDto } from './dto/answer_array.dto';
import { ShelterUuidDto } from './dto/shelter_uuid.dto';
import { ShelterChecklistAnswer } from 'src/entity/shelter_checklist_answer.entity';
import { UserRepository } from '../user/user.repository';

@Injectable()
export class ShelterService {
  constructor(
    private shelterInfoRepository: ShelterInfoRepository,
    private shelterChecklistAnswerRepository: ShelterChecklistAnswerRepository,
    private shelterChecklistQuestionRepository: ShelterChecklistQuestionRepository,
    private userRepository: UserRepository,
  ) {}

  private logger = new Logger('Shelterservice');

  /// Info
  async getShelterInfo(shelterUuidDto: ShelterUuidDto): Promise<ShelterInfo> {
    const { uuid } = shelterUuidDto;
    this.logger.verbose(
      `getShelterInfo, shelterUuidDto : ${shelterUuidDto}, uuid : "${uuid}"`,
    );
    const shelterInfo = await this.shelterInfoRepository.findOne({
      where: { shelter_uuid: uuid },
    });
    this.logger.verbose(`getShelterInfo, shelterInfo : ${shelterInfo}`);
    return shelterInfo;
  }

  async createShelterInfo(shelterUuidDto: ShelterUuidDto) {
    const { uuid } = shelterUuidDto;
    const shelterInfo = this.shelterInfoRepository.create({
      shelter_uuid: uuid,
    });
    this.logger.verbose(
      `createShelterInfo, createdShelterInfo : ${JSON.stringify(shelterInfo)}`,
    );
    const shelterResult = await this.shelterInfoRepository.save(shelterInfo);
    return shelterResult;
  }

  /// score
  async updateShelterScore(shelterInfo: ShelterInfo, avg_score: number) {
    shelterInfo.score = avg_score;
    this.logger.verbose(
      `updateShelterScore, avg_ShelterInfo : ${JSON.stringify(shelterInfo)}`,
    );
    let result = await this.shelterInfoRepository.save(shelterInfo);
    return result;
  }

  // score 점수 다시 저장하기
  async setShelterAvgScore(shelterInfo: ShelterInfo) {
    this.logger.verbose(
      `setShelterAvgScore,\n shelterInfo : ${JSON.stringify(shelterInfo)}`,
    );
    const q_number = 100; // 몇 번째 질문인지
    const shelterChecklistQuestion = (
      await this.getShelterChecklistQuestion(q_number)
    )[0];
    const scoreArray = await this.shelterChecklistAnswerRepository.find({
      where: { shelterInfo, shelterChecklistQuestion },
    });

    let total = 0;
    for (let i = 0; i < scoreArray.length; i++) {
      total += scoreArray[i].score;
    }

    let avg = total / scoreArray.length;
    this.logger.verbose(
      `setShelterAvgScore,\n score avg : ${avg}, total : ${total}, scoreArray : ${scoreArray}`,
    );
    return await this.updateShelterScore(shelterInfo, avg);
  }

  /// Answer
  async getReviews(shelterUuidDto: ShelterUuidDto, userId?: string) {
    const shelterInfo = await this.getShelterInfo(shelterUuidDto);
    this.logger.verbose(
      `getReviews, shelterInfo : ${JSON.stringify(shelterInfo)}`,
    );
    this.logger.verbose(`getReviews, userId : ${userId}`);
    if (userId) {
      var user = await this.userRepository.findOne({
        where: { user_id: userId },
      });
      var reviews = await this.shelterChecklistAnswerRepository.find({
        where: { shelterInfo, user },
        select: {
          user: {
            user_id: true,
            username: true,
          },
        },
        order: {
          user: {
            user_id: 'ASC',
          },
          shelterChecklistQuestion: {
            q_id: 'ASC',
          },
        },
        relations: {
          user: true,
        },
      });
    } else {
      var reviews = await this.shelterChecklistAnswerRepository.find({
        where: { shelterInfo },
        select: {
          user: {
            user_id: true,
            username: true,
          },
        },
        order: {
          user: {
            user_id: 'ASC',
          },
          shelterChecklistQuestion: {
            q_id: 'ASC',
          },
        },
        relations: {
          user: true,
        },
      });
    }
    this.logger.verbose(
      `getReviews, review result : ${JSON.stringify(reviews)}`,
    );

    return reviews;
  }

  // async createShelterChecklistAnswer(answerDto: AnswerDto, user: User) {
  //   const { q_id, score, shelter_info_id } = answerDto;

  //   const shelterChecklistQuestion =
  //     await this.getShelterChecklistQuestion(q_id);
  //   const shelterInfo = await this.getShelterInfo(shelter_info_id);

  //   const answer = this.shelterChecklistAnswerRepository.create({
  //     user,
  //     score,
  //     shelterInfo,
  //     shelterChecklistQuestion,
  //   });

  //   return await this.shelterChecklistAnswerRepository.save(answer);
  // }

  async createShelterChecklistAnswers(
    answerArrayDto: AnswerArrayDto,
    shelterUuidDto: ShelterUuidDto,
    user: User,
  ) {
    let answers = [];
    let shelterInfo = await this.getShelterInfo(shelterUuidDto);
    this.logger.verbose(
      `createShelterChecklistAnswers, findedShelterInfo ${shelterInfo}`,
    );
    if (!shelterInfo) {
      //shelterInfo가 없다면... 생성하자
      this.logger.verbose(
        `createShelterChecklistAnswers, there are no ShelterInfo, Make shelterInfo with UUID`,
      );
      shelterInfo = await this.createShelterInfo(shelterUuidDto);
    }

    for (let i = 0; i < answerArrayDto.answers.length; i++) {
      const { q_id, score } = answerArrayDto.answers[i];

      const shelterChecklistQuestion = (
        await this.getShelterChecklistQuestion(q_id)
      )[0];

      const answer = this.shelterChecklistAnswerRepository.create({
        user,
        score,
        shelterInfo,
        shelterChecklistQuestion,
      });

      answers.push(answer);
    }
    const answerResult =
      await this.shelterChecklistAnswerRepository.save(answers); // 최종점수 먼저 저장하고 평균을 찾자

    const score_result = await this.setShelterAvgScore(shelterInfo); // 점수 다시 계산하는 함수

    return answerResult;
  }

  /// Question
  async getShelterChecklistQuestion(
    q_id: number,
  ): Promise<ShelterChecklistQuestion[]> {
    if (q_id == 0) {
      return await this.shelterChecklistQuestionRepository.find();
    } else {
      return await this.shelterChecklistQuestionRepository.find({
        where: { q_id },
      });
    }
  }
}
