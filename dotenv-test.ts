import path from 'path';
import dotenv from 'dotenv';

export default async function() {
  dotenv.config({ path: path.resolve(__dirname, './.env.development') });
}
