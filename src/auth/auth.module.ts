import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import AuthEntity from 'src/entites/auth.entity';

@Module({
  imports: [TypeOrmModule.forFeature([AuthEntity])],
  exports: [TypeOrmModule],
  controllers: [AuthController],
  providers: [AuthService]
})
export class AuthModule {}
