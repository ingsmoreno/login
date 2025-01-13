import { HttpStatus } from '@nestjs/common';
import { RegisterException } from './RegisterException';

export default (error: Error) => {
  const { message } = error;
  if (message.includes('E11000 duplicate key error collection')) {
    throw new RegisterException('USER_REGISTERED', HttpStatus.BAD_REQUEST);
  }
};
