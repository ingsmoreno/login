import {
  Contains,
  IsDateString,
  IsEmail,
  IsInt,
  IsNotEmpty,
  IsString,
  IsStrongPassword,
  Max,
  MaxLength,
  Min,
  MinLength,
} from 'class-validator';
import { Users } from '../schema/users.schema';

export class CreateUserDto extends Users {
  @MinLength(7)
  @MaxLength(10)
  @IsNotEmpty()
  @IsString()
  idNumber: string;

  @IsNotEmpty()
  firstName: string;

  @IsNotEmpty()
  lastName: string;

  @IsNotEmpty()
  @IsDateString()
  dateOfBirth: Date;

  @IsNotEmpty()
  @IsInt()
  @Min(15, {
    message: 'Age should be 15 or above',
  })
  @Max(70, {
    message: 'Age should be 70 or less',
  })
  age: number;

  @IsNotEmpty()
  @IsEmail()
  @Contains('@gmail.com')
  email: string;

  @IsStrongPassword()
  password: string;
}
