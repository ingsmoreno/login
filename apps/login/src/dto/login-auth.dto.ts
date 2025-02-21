import { Contains, IsEmail, IsNotEmpty } from 'class-validator';

export class LoginAuthDto {
  @IsNotEmpty()
  @IsEmail()
  @Contains('@gmail.com')
  email: string;

  @IsNotEmpty()
  password: string;
}
