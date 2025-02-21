import { HttpStatus } from '@nestjs/common';
import { RpcException } from '@nestjs/microservices';

export class RegisterException extends RpcException {
  public status: number;
  public message: string;

  constructor() {
    super({ message: 'USER_REGISTERED', statusCode: HttpStatus.BAD_REQUEST });
  }
}
