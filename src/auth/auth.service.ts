import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Users, UsersDocument } from 'src/users/schema/users.schema';
import { compare, hash } from 'bcrypt';
// import { CreateAuthDto } from './dto/create-auth.dto';
import { InjectModel } from '@nestjs/mongoose';
import { JwtService } from '@nestjs/jwt';
import { LoginAuthDto } from './dto/login-auth.dto';
import { Model } from 'mongoose';
import { RegisterAuthDto } from './dto/register-auth.dto';
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

  async login(userObject: LoginAuthDto) {
    const { email, password } = userObject;
    const findUser = await this.usersModel.findOne({ email });

    if (!findUser)
      throw new HttpException('USER_NOT_FOUND', HttpStatus.NOT_FOUND);

    const checkPassword = await compare(password, findUser.password);

    if (!checkPassword)
      throw new HttpException('INCORRECT_PASSWORD', HttpStatus.FORBIDDEN);

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
