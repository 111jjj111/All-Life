import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber } from 'class-validator';

export class AnswerDto {
  @ApiProperty({
    description: '점검 문항의 pk id',
    type: Number,
  })
  @IsNotEmpty()
  @IsNumber()
  q_id: number;

  @ApiProperty({
    description: '점검 문항에 대한 평가 점수 (거짓:0, 참:1, 점수:0~10)',
    type: Number,
  })
  @IsNumber()
  @IsNotEmpty()
  score: number;
}
