import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://yuri_user:123GhxZ$@cluster0.majum.mongodb.net/'),
    UsersModule],
  controllers: [],
  providers: [],
})
export class AppModule { }
