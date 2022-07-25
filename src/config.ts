import 'dotenv/config';

export const config = {
  environment: process.env.NODE_ENV || 'development',
  port: process.env.PORT || '4000',
};
