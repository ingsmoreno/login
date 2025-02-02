import { ClientsModule, Transport } from '@nestjs/microservices';
import { Users, UsersSchema } from './schema/users.schema';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Users.name,
        schema: UsersSchema,
      },
    ]),
    ClientsModule.register([
      { name: 'MAIL_SERVICE', transport: Transport.TCP },
    ]),
  ],
  controllers: [UsersController],
  providers: [UsersService],
  exports: [MongooseModule],
})
export class UsersModule {}
