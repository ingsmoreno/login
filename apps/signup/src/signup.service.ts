import { Users, UsersDocument } from 'apps/users/src/schema/users.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import MongooseHandlerException from './errors/MongooseHandlerException';
import { RegisterAuthDto } from 'apps/auth/src/dto/register-auth.dto';
import { hash } from 'bcrypt';

@Injectable()
export class SignupService {
  constructor(
    @InjectModel(Users.name)
    private usersModel: Model<UsersDocument>,
  ) {}

  async register(userObject: RegisterAuthDto) {
    try {
      const { password } = userObject;
      const plainToHash = await hash(password, 10);
      userObject = {
        ...userObject,
        password: plainToHash,
      };
      return await this.usersModel.create(userObject);
    } catch (error) {
      MongooseHandlerException(error);
    }
  }
}
