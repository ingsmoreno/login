import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { MailappModule } from './mailapp.module';
import { NestFactory } from '@nestjs/core';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    MailappModule,
    {
      transport: Transport.REDIS,
      options: {
        host: 'localhost',
        port: 6379,
      },
    },
  );
  await app.listen();
}
bootstrap();
