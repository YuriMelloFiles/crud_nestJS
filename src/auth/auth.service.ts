// auth/auth.service.ts

import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../users/users.service';
import { LoginDto } from './dto/login.dto';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async login(loginDto: LoginDto) {
  console.log("Login DTO recebido:", loginDto);
  const user = await this.usersService.findOneByEmail(loginDto.email);
  //console.log("Usuário encontrado:", user);
  
  if (!user || user.password !== loginDto.password) {
    throw new UnauthorizedException('Invalid credentials');
  }

  const payload = { email: user.email, sub: user._id }; // Agora _id
  return {
    access_token: this.jwtService.sign(payload),
  };
}
}
