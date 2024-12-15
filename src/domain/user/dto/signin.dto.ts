import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class SignInDto {
  @ApiProperty({
    type: String,
  })
  @IsNotEmpty()
  user_id: string;
  @ApiProperty({
    type: String,
  })
  @IsNotEmpty()
  password: string;
}
