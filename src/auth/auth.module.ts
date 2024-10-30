import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UsersModule } from '../users/users.module'; // Importe o UsersModule para acessar o UsersService
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { JwtStrategy } from './jwt.strategy';
import { AuthController } from './auth.controller';


export const jwtSecret = 'zjP9h6ZI5LoSKCRj';

@Module({
  imports: [
    UsersModule, // Certifique-se de que o UsersModule está importado aqui
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.register({
      secret: jwtSecret, // Altere para uma chave segura e armazene-a em variáveis de ambiente em produção
      signOptions: { expiresIn: '5m' }, // Defina o tempo de expiração do token
    }),
  ],
  providers: [AuthService, JwtStrategy], // AuthService e JwtStrategy são os provedores
  exports: [AuthService], // Exporte o AuthService para usá-lo em outros módulos
  controllers: [AuthController],
})
export class AuthModule {}
