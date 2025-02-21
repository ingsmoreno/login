import { Inject, Injectable } from '@nestjs/common';
import { Users, UsersDocument } from './schema/users.schema';
import { ClientProxy } from '@nestjs/microservices';
import { CreateUserDto } from '../../signup/src/dto/create-user.dto';
// import ErrorHandlerException from './errors/ErrorHandlerException';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class UsersService {
  constructor(
    @Inject('SIGNUP_SERVICE') private signupClient: ClientProxy,
    @InjectModel(Users.name) private usersModel: Model<UsersDocument>,
  ) {}

  // async create(createUserDto: CreateUserDto) {
  //   const userCreated = await this.usersModel.create(createUserDto);

  //   return userCreated;
  // }
  // getHello(): string {
  //   return 'Hello World!';
  // }

  async createUser(user: CreateUserDto) {
    return this.signupClient.send('create_user', user);
  }
}
