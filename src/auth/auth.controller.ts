import { Controller, Get, Post, Req, Res } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(
    private authService: AuthService
  ) {};

  @Post('/login')
  login(@Req() req, @Res() res) {
    this.authService.login(req, res);
  }
}
