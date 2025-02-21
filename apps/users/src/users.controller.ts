import { Body, Controller, Post } from '@nestjs/common';
import { CreateUserDto } from '../../signup/src/dto/create-user.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('/signup')
  async create(@Body() createUserDto: CreateUserDto) {
    return await this.usersService.createUser(createUserDto);
  }

  // @Get()
  // getHello(): string {
  //   return this.usersService.getHello();
  // }
}
