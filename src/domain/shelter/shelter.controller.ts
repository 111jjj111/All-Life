import {
  Body,
  Controller,
  Get,
  Logger,
  Param,
  Post,
  Query,
  UseGuards,
} from '@nestjs/common';
import { ShelterService } from './shelter.service';
import { AuthGuard } from '@nestjs/passport';
import { GetUser } from '../user/get-user.decorator';
import { User } from 'src/entity/user.entity';
import { AnswerArrayDto } from './dto/answer_array.dto';
import { ShelterUuidDto } from './dto/shelter_uuid.dto';
import { ApiBody, ApiOperation, ApiQuery, ApiTags } from '@nestjs/swagger';
import { ShelterChecklistQuestion } from 'src/entity/shelter_checklist_question.entity';

@Controller('shelter')
@ApiTags('대피소 API')
export class ShelterController {
  constructor(private shelterService: ShelterService) {}

  private logger = new Logger('ShelterController');

  /// question
  @Get('/q') //질문 항목 하나 가져오기 (0이면 다 가져옮)
  @ApiOperation({
    summary: '점검 항목 가져오기',
    description:
      '점검 q_id를 입력하면 그에 해당하는 점검 항목을 가져온다.\nq_id=0을 입력하면 모든 점검 항목을 가져온다.',
  })
  @ApiQuery({
    name: 'q_id',
    type: Number,
  })
  getShelterChecklistQuestion(
    @Query() query: { q_id: number },
  ): Promise<ShelterChecklistQuestion[]> {
    const { q_id } = query;
    return this.shelterService.getShelterChecklistQuestion(q_id);
  }

  /// answer
  @Get('/a') // shelter_uuid 입력 < 리뷰 모두 가져오기 (사람, 질문 번호 내림차순)
  @ApiOperation({
    summary: 'shelter에 대한 모든 점검 가져오기 (사람, 질문 번호 내림차순)',
    description:
      'shelter_uuid를 입력하면 그 shelter에 대한 모든 점검 결과를 가져옵니다.',
  })
  @ApiQuery({
    name: 'userId',
    description: '보고싶은 리뷰 작성자의 id를 입력해주세요',
    required: false,
  })
  @ApiQuery({
    name: 'uuid',
    description: 'shelter의 uuid를 입력해주세요.',
  })
  getReviews(
    @Query() shelterUuidDto: ShelterUuidDto,
    @Query('userId') userId?: string,
  ) {
    return this.shelterService.getReviews(shelterUuidDto, userId);
  }

  @Post('/a') // 전체 답변 넣기
  @ApiOperation({
    summary: 'shelter에 대한 점검 결과를 저장합니다.',
    description:
      '각 항목에 대한 점검 결과를 answer key에 배열로 저장해서 한 번에 저장합니다.',
  })
  @ApiBody({
    description:
      '점검 결과 body<br>q_id(1~6) -> bool 질문[0,1]<br>q_id(100) -> 대피소 별점()[0~10]<br>🫸<code>q_id (1~6과 100)까지 총 7개의 answer를 다같이 보내주세요</code>🫷',
    type: AnswerArrayDto,
  })
  @ApiQuery({
    name: 'uuid',
    description: 'shelter의 uuid를 입력해주세요.',
  })
  @UseGuards(AuthGuard())
  createAnswers(
    @Body() answerArrayDto: AnswerArrayDto,
    @GetUser() user: User,
    @Query() shelterUuidDto: ShelterUuidDto,
  ) {
    return this.shelterService.createShelterChecklistAnswers(
      answerArrayDto,
      shelterUuidDto,
      user,
    );
  }

  /// score
  @Get('/score')
  @ApiOperation({
    summary: 'shelter에 대한 별점을 가져옵니다.',
    description: 'uuid를 입력하면 그 shelter에 대한 평균 별점을 가져옵니다.',
  })
  @ApiQuery({
    name: 'uuid',
    description: 'shelter의 uuid를 입력해주세요.',
  })
  getShelterScore(@Query() shelterUuidDto: ShelterUuidDto) {
    return this.shelterService.getShelterInfo(shelterUuidDto);
  }
}
