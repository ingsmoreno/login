import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getUsers(): string[] {
    return ['Saray', 'Diego'];
  }

  getHello(): string {
    return 'Hello World!';
  }
}
