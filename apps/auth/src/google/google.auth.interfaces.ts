export interface IGoogleUser {
  email: string;
  firstName: string;
  lastName: string;
  picture: string;
  accessToken: string;
  refreshToken: string;
}

export interface IJWTPayload {
  id: string;
  googleAccessToken: string;
  googlerefreshToken: string;
}
