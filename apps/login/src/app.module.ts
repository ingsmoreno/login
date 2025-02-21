// import { ClientsModule, Transport } from '@nestjs/microservices';
// import { AppController } from './app.controller';
// import { AppService } from './app.service';
// import { AuthModule } from './auth/auth.module';
// import { ConfigModule } from '@nestjs/config';
// import { Module } from '@nestjs/common';
// import { MongooseModule } from '@nestjs/mongoose';

// @Module({
//   imports: [
//     ConfigModule.forRoot({
//       envFilePath: '.env',
//       isGlobal: true,
//     }),
//     MongooseModule.forRoot(process.env.MONGODB_URI),
//     ClientsModule.register([
//       {
//         name: 'USERS_SERVICE',
//         transport: Transport.REDIS,
//         options: { host: 'localhost', port: 6379 },
//       },
//     ]),
//     AuthModule,
//   ],
//   controllers: [AppController],
//   providers: [AppService],
// })
// export class AppModule {}
