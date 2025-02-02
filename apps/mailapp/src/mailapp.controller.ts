import { Controller, Get } from '@nestjs/common';
import { EventPattern } from '@nestjs/microservices';
import { MailappService } from './mailapp.service';

@Controller()
export class MailappController {
  constructor(private readonly mailappService: MailappService) {}

  // @Get()
  // getHello(): string {
  //   return this.mailappService.getHello();
  // }

  @EventPattern('new_email')
  handleNewEmail(data: any) {
    console.log('este es el evento entrante', data);
    return data;
  }
}
