import process from 'process';
import dotenv from 'dotenv';

dotenv.config();

interface EnvironmentConfig {
  port: number | undefined; // Assuming both values are strings, but can be other types
  database_url: string | undefined;
}

const e: EnvironmentConfig = {
  port: process.env.PORT ? parseInt(process.env.PORT) : undefined,
  database_url: process.env.DATABASE_URL,
};

export default e;
