import { Injectable } from '@nestjs/common';
import { AppError } from 'src/constants/errors';
import * as bcrypt from 'bcrypt';
import { UserLoginDTO } from './dto';
import { TokenService } from '../token/token.service';
import { UsersService } from '../users/users.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly tokenService: TokenService,
  ) {}

  googleLogin(req) {
    if (!req.user) {
      return AppError.noUserGoogle;
    }

    return {
      message: AppError.userInfo,
      user: req.user,
    };
  }

  async loginUser(dto: UserLoginDTO) {
    const existUser = await this.usersService.findUserByEmail(dto.email);

    if (!existUser) {
      return { status: 0, message: AppError.userNotFound };
    }

    const validatePassword = await bcrypt.compare(
      dto.password,
      existUser.dataValues.password,
    );

    if (!validatePassword) {
      return { status: -1, message: AppError.wrongData };
    }

    const token = await this.tokenService.generateJwtToken(existUser);

    return { status: 1, token };
  }
}
