import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { RegisterAdminAuthDto, RegisterAuthDto } from './dto/register-auth.dto';
import { ApiTags } from '@nestjs/swagger';
import { AuthService } from './auth.service';
import ErrorHandlerException from './handleExceptions/ErrorHandlerException';
import { LoginAuthDto } from './dto/login-auth.dto';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  async registerUser(@Body() userObject: RegisterAuthDto) {
    try {
      return await this.authService.register(userObject);
    } catch (error) {
      ErrorHandlerException(error);
    }
  }

  @Post('register/admin')
  async registerAdminUser(@Body() userObject: RegisterAdminAuthDto) {
    try {
      return await this.authService.registerAdmin(userObject);
    } catch (error) {
      ErrorHandlerException(error);
    }
  }
  @Post('login')
  async loginUser(@Body() userObject: LoginAuthDto) {
    return await this.authService.login(userObject);
  }

  @Get()
  findAll() {
    return this.authService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.authService.findOne(+id);
  }

  @Patch(':id')
  // update(@Param('id') id: string, @Body() updateAuthDto: UpdateAuthDto) {
  //   return this.authService.update(+id, updateAuthDto);
  // }
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.authService.remove(+id);
  }
}
