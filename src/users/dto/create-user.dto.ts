import {
  Contains,
  IsDateString,
  IsEmail,
  IsInt,
  IsNotEmpty,
  IsStrongPassword,
  Max,
  Min,
} from 'class-validator';
import { IUserSchema } from '../schema/users.schema';

export class CreateUserDto implements IUserSchema {
  @IsNotEmpty()
  idNumber: number;

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
