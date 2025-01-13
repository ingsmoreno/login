import { RegisterAdminAuthDto, RegisterAuthDto } from './dto/register-auth.dto';
import { Users, UsersDocument } from 'src/users/schema/users.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { LoginAuthDto } from './dto/login-auth.dto';
import LoginExceptionError from './handleExceptions/LoginExceptionError';
import { Model } from 'mongoose';
import { hash } from 'bcrypt';
// import { CreateAuthDto } from './dto/create-auth.dto';
// import { UpdateAuthDto } from './dto/update-auth.dto';
// import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel(Users.name)
    private usersModel: Model<UsersDocument>,
    private readonly jwtService: JwtService,
  ) {}

  async register(userObject: RegisterAuthDto) {
    const { password } = userObject;
    const plainToHash = await hash(password, 10);
    userObject = {
      ...userObject,
      password: plainToHash,
    };
    return this.usersModel.create(userObject);
  }

  async registerAdmin(userObject: RegisterAdminAuthDto) {
    const { password } = userObject;
    const plainToHash = await hash(password, 10);
    userObject = {
      ...userObject,
      password: plainToHash,
    };
    return this.usersModel.create(userObject);
  }

  async login(userObject: LoginAuthDto) {
    const { email, password } = userObject;
    const findUser = await this.usersModel.findOne({ email });

    await LoginExceptionError(findUser, password);

    const payload = { id: findUser._id, name: findUser.firstName };

    const token = this.jwtService.sign(payload);

    return {
      data: findUser,
      token,
    };
  }

  // create(createAuthDto: CreateAuthDto) {
  //   return 'This action adds a new auth';
  // }

  findAll() {
    return `This action returns all auth`;
  }

  findOne(id: number) {
    return `This action returns a #${id} auth`;
  }

  // update(id: number, updateAuthDto: UpdateAuthDto) {
  //   return `This action updates a #${id} auth`;
  // }

  remove(id: number) {
    return `This action removes a #${id} auth`;
  }
}
