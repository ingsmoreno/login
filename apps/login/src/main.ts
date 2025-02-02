import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .addBearerAuth()
    .setTitle('Services Documentation')
    .setDescription('The service API description')
    .setVersion('1.0')
    .addTag('auth')
    .build();

  const documentFactory = () => SwaggerModule.createDocument(app, config);

  SwaggerModule.setup('documentation', app, documentFactory);

  app.useGlobalPipes(new ValidationPipe());
  await app.listen(3001);
}

bootstrap();
