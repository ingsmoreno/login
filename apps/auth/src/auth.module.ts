// import { AuthController } from './auth.controller';
// import { ConfigModule } from '@nestjs/config';
// import { AuthService } from './auth.service';
// import { GoogleAuthService } from './google/google.auth.service';
// import { GoogleStrategy } from './google/google.strategy';
// import { JwtModule } from '@nestjs/jwt';
// import { JwtStrategy } from './jwt.strategy';
// import { Module } from '@nestjs/common';
// import { UsersModule } from '../users/users.module';

// @Module({
//   imports: [
//     ConfigModule.forRoot({
//       envFilePath: '.env',
//       isGlobal: true,
//     }),
//     UsersModule,
//     JwtModule.register({
//       secret: process.env.JWT_SECRET,
//       signOptions: { expiresIn: '60s' },
//     }),
//   ],
//   controllers: [AuthController],
//   providers: [GoogleAuthService, GoogleStrategy, AuthService, JwtStrategy],
// })
// export class AuthModule {}
