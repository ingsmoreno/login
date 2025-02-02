import {
  Ctx,
  EventPattern,
  MessagePattern,
  Payload,
  RedisContext,
} from '@nestjs/microservices';
import { Controller } from '@nestjs/common';
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

  @MessagePattern('notifications')
  getNotifications(@Payload() data: number[], @Ctx() context: RedisContext) {
    console.log(`Channel: ${context.getChannel()}`);
  }
}
