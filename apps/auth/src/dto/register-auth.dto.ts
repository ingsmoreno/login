import { CreateUserDto } from '../../../signup/src/dto/create-user.dto';
import { IsNotEmpty } from 'class-validator';
import { IsNotPresent } from '../validators/customValidators';

export class RegisterAuthDto extends CreateUserDto {
  @IsNotPresent()
  role: string;
}
export class RegisterAdminAuthDto extends CreateUserDto {
  @IsNotEmpty()
  role: string;
}
