import { Module } from '@nestjs/common';
import { ShelterController } from './shelter.controller';
import { ShelterService } from './shelter.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ShelterInfo } from 'src/entity/shelter_info.entity';
import { ShelterInfoRepository } from './shelter_info.repository';
import { ShelterChecklistAnswer } from 'src/entity/shelter_checklist_answer.entity';
import { ShelterChecklistAnswerRepository } from './shelter_checklist_answer.repository';
import { ShelterChecklistQuestion } from 'src/entity/shelter_checklist_question.entity';
import { ShelterChecklistQuestionRepository } from './shelter_checklist_question.repository';
import { UserModule } from '../user/user.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      ShelterInfo,
      ShelterChecklistAnswer,
      ShelterChecklistQuestion,
    ]),
    UserModule,
  ],
  controllers: [ShelterController],
  providers: [
    ShelterService,
    ShelterInfoRepository,
    ShelterChecklistQuestionRepository,
    ShelterChecklistAnswerRepository,
  ],
})
export class ShelterModule {}
