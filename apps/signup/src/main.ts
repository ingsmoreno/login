import { MicroserviceOptions, Transport } from '@nestjs/microservices';

import { NestFactory } from '@nestjs/core';
import { SignupModule } from './signup.module';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    SignupModule,
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
