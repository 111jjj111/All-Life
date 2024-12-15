import { IsArray, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { AnswerDto } from './answer.dto';
import { ApiProperty } from '@nestjs/swagger';

export class AnswerArrayDto {
  @ApiProperty({
    description: 'Answers array',
    type: [AnswerDto],
  })
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => AnswerDto)
  answers: AnswerDto[];
}
