import { Injectable } from '@nestjs/common';
import { AppError } from 'src/constants/errors';

@Injectable()
export class AuthService {
  googleLogin(req) {
    if (!req.user) {
      return AppError.noUserGoogle;
    }

    return {
      message: AppError.userInfo,
      user: req.user,
    };
  }
}
