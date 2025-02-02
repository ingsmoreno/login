// import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { NestFactory } from '@nestjs/core';
import { ProductsModule } from './products.module';

async function bootstrap() {
  const app = await NestFactory.create(ProductsModule);
  await app.listen(3001);
}

// async function bootstrap() {
//   const app = await NestFactory.createMicroservice<MicroserviceOptions>(
//     ProductsModule,
//     {
//       transport: Transport.TCP,
//     },
//   );
//   await app.listen();
// }
bootstrap();
