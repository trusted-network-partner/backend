import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { GoogleStrategy } from 'src/strategy/google.strategy';
import { ConfigModule } from '@nestjs/config';

@Module({
  providers: [AuthService, GoogleStrategy],
  controllers: [AuthController],
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
  ],
})
export class AuthModule {}
