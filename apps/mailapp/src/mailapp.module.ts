import { MailappController } from './mailapp.controller';
import { MailappService } from './mailapp.service';
import { Module } from '@nestjs/common';

@Module({
  imports: [],
  controllers: [MailappController],
  providers: [MailappService],
})
export class MailappModule {}
