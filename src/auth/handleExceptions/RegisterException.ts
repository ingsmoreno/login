import { HttpException } from '@nestjs/common';

export class RegisterException extends HttpException {
  constructor(message: string | Record<string, any>, status: number) {
    super(message, status);
  }
}
