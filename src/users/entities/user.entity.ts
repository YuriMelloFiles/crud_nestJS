import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import {Document , Types} from 'mongoose';

export type UserDocument = User & Document;

@Schema()
export class User {
  @Prop()
  name: string;

  @Prop()
  email: string;

  @Prop()
  password: string;

  @Prop({ type: Types.ObjectId })
  _id?: Types.ObjectId;
}

export const UserSchema = SchemaFactory.createForClass(User);
