import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';
import { UserTypeEnum } from 'src/entity/enum/userType.enum';

export class SignUpDto {
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

  @ApiProperty({
    type: String,
  })
  @IsNotEmpty()
  username: string;

  @ApiProperty({
    type: String,
  })
  @IsNotEmpty()
  email: string;

  @ApiProperty({
    type: Boolean,
  })
  @IsNotEmpty()
  term: boolean;

  @ApiProperty({
    description: '( 관계자, 관리자 = 0, 개인사용자 = 100 )',
    type: Number,
  })
  @IsNotEmpty()
  type: UserTypeEnum;

  @ApiProperty({
    type: String,
  })
  @IsNotEmpty()
  language: string;

  @ApiProperty({
    type: String,
  })
  @IsNotEmpty()
  location: string;
}
