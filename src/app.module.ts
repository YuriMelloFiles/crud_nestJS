import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://yuri_user:123GhxZ$@cluster0.majum.mongodb.net/'),
    UsersModule,
    AuthModule],
  controllers: [],
  providers: [],
})
export class AppModule { }
