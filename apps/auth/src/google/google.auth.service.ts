// import { IGoogleUser, IJWTPayload } from './google.auth.interfaces';
// import {
//   RegisterAdminAuthDto,
//   RegisterAuthDto,
// } from '../dto/register-auth.dto';
// import { Users, UsersDocument } from '../../users/schema/users.schema';
// import { InjectModel } from '@nestjs/mongoose';
// import { Injectable, UnauthorizedException } from '@nestjs/common';
// import { JwtService, JwtSignOptions } from '@nestjs/jwt';
// import { LoginAuthDto } from '../dto/login-auth.dto';
// import LoginExceptionError from '../handleExceptions/LoginExceptionError';
// import { Model } from 'mongoose';
// import { hash } from 'bcrypt';
// import { AuthProviders } from '../core/enums';
// import { ConfigService } from '@nestjs/config';
// import { google } from 'googleapis';
// // import { CreateAuthDto } from './dto/create-auth.dto';
// // import { UpdateAuthDto } from './dto/update-auth.dto';
// // import { UsersService } from 'src/users/users.service';

// @Injectable()
// export class GoogleAuthService {
//   constructor(
//     private readonly usersModel: Model<UsersDocument>,
//     private readonly jwtService: JwtService,
//     private readonly configService: ConfigService,
//   ) {}

//   async login(user: IGoogleUser) {
//     const { email, firstName, lastName, picture, accessToken, refreshToken } =
//       user;
//     let userEntity = await this.usersModel.findOne({ email });

//     if (userEntity && userEntity?.provider !== AuthProviders.GOOGLE) {
//       throw new Error('Email already exists');
//     }

//     if (!userEntity) {
//       const newUser = {
//         email,
//         first_name: firstName,
//         last_name: lastName,
//         image_url: picture,
//         provider: AuthProviders.GOOGLE,
//       };
//       userEntity = await this.usersModel.create(newUser);
//     }

//     const payload: IJWTPayload = {
//       id: userEntity.idNumber,
//       googleAccessToken: accessToken,
//       googlerefreshToken: refreshToken,
//     };

//     const token = this.generateToken(payload);
//     return {
//       message: 'User information from Google',
//       user,
//       token,
//       googleRefreshToken: refreshToken,
//     };
//   }

//   async checkGoogleToken(token: string) {
//     const oAuth2Client = new google.auth.OAuth2(
//       this.configService.getOrThrow(
//         process.env.GOOGLE_CLIENT_ID,
//       ),
//       this.configService.getOrThrow(process.env.GOOGLE_CLIENT_SECRET),
//     );

//     try {
//       const result = await oAuth2Client.getTokenInfo(token);
//       const invalidToken = new Date().getTime() > result.expiry_date;
//       if (invalidToken) {
//         throw new UnauthorizedException({
//           message: 'Invalid Google Token',
//         });
//       }

//       return result.email;
//     } catch (error) {
//       throw new UnauthorizedException({
//         message: 'Invalid Google Token',
//         error,
//       });
//     }
//   }

//   async refreshGoogletoken(refreshToken: string) {
//     const oAuth2Client = new google.auth.OAuth2(
//       this.configService.getOrThrow(process.env.GOOGLE_CLIENT_ID),
//       this.configService.getOrThrow(process.env.GOOGLE_CLIENT_SECRET),
//     );

//     try {
//       oAuth2Client.setCredentials({
//         refresh_token: refreshToken,
//       });

//       const {
//         credentials: { access_token, refresh_token },
//       } = await oAuth2Client.refreshAccessToken();

//       const { email } = await oAuth2Client.getTokenInfo(access_token);
//       const userEntity = await this.usersModel.findOne({ email });

//       const payload: IJWTPayload = {
//         id: userEntity.idNumber,
//         googleAccessToken: access_token,
//         googlerefreshToken: refresh_token,
//       };

//       const token = await this.generateToken(payload);

//       return token;
//     } catch (error) {
//       throw new UnauthorizedException({
//         message: 'Invalid Google Token',
//         error,
//       });
//     }
//   }

//   private async generateToken(payload: IJWTPayload, options?: JwtSignOptions) {
//     const token = await this.jwtService.signAsync({ ...payload }, options);
//     return token;
//   }

//   // create(createAuthDto: CreateAuthDto) {
//   //   return 'This action adds a new auth';
//   // }

//   findAll() {
//     return `This action returns all auth`;
//   }

//   findOne(id: number) {
//     return `This action returns a #${id} auth`;
//   }

//   // update(id: number, updateAuthDto: UpdateAuthDto) {
//   //   return `This action updates a #${id} auth`;
//   // }

//   remove(id: number) {
//     return `This action removes a #${id} auth`;
//   }
// }
