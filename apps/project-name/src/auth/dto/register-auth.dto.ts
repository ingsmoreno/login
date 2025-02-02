import { CreateUserDto } from '../../users/dto/create-user.dto';
import { IsNotEmpty } from 'class-validator';
import { IsNotPresent } from '../../utils/validators/customValidators';

export class RegisterAuthDto extends CreateUserDto {
  @IsNotPresent()
  role: string;
}
export class RegisterAdminAuthDto extends CreateUserDto {
  @IsNotEmpty()
  role: string;
}
