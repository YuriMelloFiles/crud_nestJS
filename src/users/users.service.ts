import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from './entities/user.entity';
import { ReturnUserDto } from './dto/return-user.dto';

@Injectable()
export class UsersService {


  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) { }

  create(createUserDto: CreateUserDto) {
    const user = new this.userModel(createUserDto);
    console.log(user.empresa)
    return user.save();
  }

  findAll() {
    return this.userModel.find();
  }

  findOne(id: string) {
    return this.userModel.findById(id);
  }

  // Novo método para buscar pelo email
  async findOneByEmail(email: string): Promise<ReturnUserDto | null> {
    //console.log(`Procurando usuário com email: ${email}`);
    return this.userModel.findOne({ email }).exec();
  }

  update(id: string, updateUserDto: UpdateUserDto) {
    return this.userModel.findByIdAndUpdate(
      {
        _id: id,
      },
      {
        $set: updateUserDto,
      },
      {
        new: true,
      },
    );
  }

  remove(id: string) {
    return this.userModel.deleteOne(
      {
        _id: id,

      })
      .exec();
  }
}
