import { HttpStatus } from '@nestjs/common';
import { RegisterException } from './RegisterException';
import { RpcException } from '@nestjs/microservices';

interface T extends Error {
  code: number;
}

export default (error: T) => {
  const { code } = error;
  if (code === 11000) {
    throw new RegisterException();
  }

  throw new RpcException({
    statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
    message: 'INTERNAL SERVER ERROR',
  });
};
