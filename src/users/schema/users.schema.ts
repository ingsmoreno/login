import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type UsersDocument = HydratedDocument<Users>;

export interface IUserSchema {
  idNumber: string;

  firstName: string;

  lastName: string;

  dateOfBirth: Date;

  age: number;

  email: string;

  password: string;

  role: string;
}

@Schema()
export class Users implements IUserSchema {
  @Prop({ unique: true })
  idNumber: string;

  @Prop()
  firstName: string;

  @Prop()
  lastName: string;

  @Prop()
  dateOfBirth: Date;

  @Prop()
  age: number;

  @Prop({ unique: true })
  email: string;

  @Prop()
  password: string;

  @Prop({ default: 'user' })
  role: string;
}

export const UsersSchema = SchemaFactory.createForClass(Users);
UsersSchema.index({ idNumber: 1, email: 1 }, { unique: true });
UsersSchema.index({ idNumber: 1 }, { unique: true });
UsersSchema.index({ email: 1 }, { unique: true });
