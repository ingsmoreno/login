import { HttpException, HttpStatus } from '@nestjs/common';
import { compare } from 'bcrypt';

interface checkUser {
  idNumber: string;
  firstName: string;
  lastName: string;
  dateOfBirth: Date;
  age: number;
  email: string;
  password: string;
  role: string;
}

export default async (findUser: checkUser, password: string) => {
  if (!findUser)
    throw new HttpException('USER_NOT_FOUND', HttpStatus.NOT_FOUND);

  const checkPassword = await compare(password, findUser.password);

  if (!checkPassword)
    throw new HttpException('INCORRECT_PASSWORD', HttpStatus.FORBIDDEN);
};
