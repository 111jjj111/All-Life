import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsNotEmpty, IsNumber } from 'class-validator';

export class ShelterUuidDto {
  @ApiProperty({ description: 'shelter uuid를 받습니다.' })
  @IsNotEmpty()
  uuid: string;
}
