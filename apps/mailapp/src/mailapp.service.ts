import { Injectable } from '@nestjs/common';

@Injectable()
export class MailappService {
  getHello(): string {
    return 'Hello World!';
  }

  processEmail(user: any) {
    console.log(user, 'data');
  }
}
