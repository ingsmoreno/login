import { Users, UsersDocument } from './schema/users.schema';
import { CreateUserDto } from './dto/create-user.dto';
// import { FindUserDto } from './dto/find-user.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(Users.name) private usersModel: Model<UsersDocument>,
  ) {}

  async create(createUserDto: CreateUserDto) {
    const userCreated = await this.usersModel.create(createUserDto);

    return userCreated;
  }

  async findAll() {
    return await this.usersModel.find();
  }

  // async findOne(email: FindUserDto) {
  //   // return await this.usersModule.findOne(email);
  // }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
