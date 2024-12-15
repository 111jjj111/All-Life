import { Body, Controller, Logger, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { SignInDto } from './dto/signin.dto';
import { SignUpDto } from './dto/signup.dto';
import { ApiBody, ApiOperation, ApiParam, ApiTags } from '@nestjs/swagger';

@Controller('user')
@ApiTags('유저 API')
export class UserController {
  constructor(private userService: UserService) {}

  private logger = new Logger('UserController');

  @Post('/signup')
  @ApiOperation({
    summary: '회원가입',
    description: `
    {
    "user_id": "daekyu",
    "password": "daekyu_pw",
    "username": "김대규",
    "email": "daekyu@email.com",
    "term": "true",
    "type": 0, ( 관리자 = 0, 개인사용자 = 100 )
    "language": "한국어",
    "location": "부산광역시"
}`,
  })
  @ApiBody({ type: SignUpDto })
  signUp(@Body() signUpDto: SignUpDto) {
    this.logger.verbose(`UserController /signup is invoked`);
    return this.userService.signUp(signUpDto);
  }

  @Post('/signin')
  @ApiBody({ type: SignInDto })
  signIn(@Body() signInDto: SignInDto): Promise<{ accessToken: string }> {
    return this.userService.signIn(signInDto);
  }
}

/*
{
    "user_id": "daekyu",
    "password": "daekyu_pw",
    "username": "김대규",
    "email": "daekyu@email.com",
    "term": "true",
    "type": 0,
    "language": "한국어"
}
*/
