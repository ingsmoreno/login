import { Module } from '@nestjs/common';
import { SignupController } from './signup.controller';
import { SignupService } from './signup.service';
import { UsersModule } from 'apps/users/src/users.module';

@Module({
  imports: [UsersModule],
  controllers: [SignupController],
  providers: [SignupService],
})
export class SignupModule {}
