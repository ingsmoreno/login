import { MessagePattern, Payload } from '@nestjs/microservices';
import { Controller } from '@nestjs/common';
import { RegisterAuthDto } from 'apps/auth/src/dto/register-auth.dto';
import { SignupService } from './signup.service';

@Controller()
export class SignupController {
  constructor(private readonly signupService: SignupService) {}

  @MessagePattern('create_user')
  async create(@Payload() data: RegisterAuthDto) {
    return await this.signupService.register(data);
  }
}
