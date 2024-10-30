import { Controller, Post, Request,Body, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('login')
  async login(@Body() loginDto: LoginDto) {
    console.log('Login DTO recebido:', loginDto);
    return this.authService.login(loginDto); // Chama o serviço de autenticação para gerar o token
  }
}

