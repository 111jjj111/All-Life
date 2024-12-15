import {
  ConflictException,
  Injectable,
  InternalServerErrorException,
  UnauthorizedException,
} from '@nestjs/common';
import { UserRepository } from './user.repository';
import { SignInDto } from './dto/signin.dto';
import { SignUpDto } from './dto/signup.dto';
import * as bcrypt from 'bcryptjs';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class UserService {
  constructor(
    private userRepository: UserRepository,
    private jwtService: JwtService,
  ) {}

  async signUp(signUpDto: SignUpDto) {
    const {
      user_id,
      password,
      username,
      email,
      term,
      type,
      language,
      location,
    } = signUpDto;

    // pw에 소금치고 해싱하기
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(password, salt);

    const user = this.userRepository.create({
      user_id,
      password: hashedPassword,
      username,
      email,
      term,
      type,
      language,
      location,
    });

    try {
      await this.userRepository.save(user);
    } catch (error) {
      console.log(error);
      if (error.code === '23505') {
        throw new ConflictException('Username Already Existing');
      } else {
        throw new InternalServerErrorException();
      }
    }
    return { message: 'signUp successful.' };
  }

  async signIn(signInDto: SignInDto): Promise<{ accessToken: string }> {
    const { user_id, password } = signInDto;
    const user = await this.userRepository.findOne({ where: { user_id } });

    // db의 pw와 body에서 받아온 pw 비교하기
    if (user && (await bcrypt.compare(password, user.password))) {
      const { user_id, username, email, term, type, language, location } = user;
      const payload = {
        user_id,
        username,
        email,
        term,
        type,
        language,
        location,
      };
      const accessToken = await this.jwtService.sign(payload);

      return { accessToken };
    } else {
      throw new UnauthorizedException('please check id or pw');
    }
  }
}
