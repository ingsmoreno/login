import { Strategy, VerifyCallback } from 'passport-google-oauth20';
import { ConfigService } from '@nestjs/config';
import { IGoogleUser } from './google.auth.interfaces';
import { PassportStrategy } from '@nestjs/passport';

export class GoogleStrategy extends PassportStrategy(Strategy, 'google') {
  constructor(configService: ConfigService) {
    super({
      clientID: configService.getOrThrow(process.env.GOOGLE_CLIENT_ID),
      clientSecret: configService.getOrThrow(process.env.GOOGLE_CLIENT_SECRET),
      callbackURL: configService.getOrThrow(process.env.GOOGLE_CALLBACK_URL),
    });
  }

  authorizationParams(options: any): object {
    return {
      ...options,
      accesss_type: 'offline',
      prompt: 'consent',
    };
  }

  async validate(
    accessToken: string,
    refreshToken: string,
    profile: any,
    done: VerifyCallback,
  ): Promise<any> {
    const { firstName, email, lastName, picture } = profile;
    const user: IGoogleUser = {
      email,
      firstName,
      lastName,
      picture,
      accessToken,
      refreshToken,
    };
    done(null, user);
  }
}
