import 'reflect-metadata';
import { DataSource } from 'typeorm';
import dotenv from 'dotenv';
import { ProductEntity } from '../src/models/product.entity';

dotenv.config();

const requiredEnv = ['DB_HOST', 'DB_PORT', 'DB_USERNAME', 'DB_PASSWORD', 'DB_NAME'];
for (const envVar of requiredEnv) {
  if (!process.env[envVar]) {
    console.error(`Error: Environment variable ${envVar} is not defined.`);
    process.exit(1);
  }
}

export const AppDataSource = new DataSource({
  type: 'mysql',
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT!, 10),  
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  entities: [ProductEntity],
  synchronize: true,
  logging: false,
});

export const connectDB = async () => {
  try {
    await AppDataSource.initialize();
    console.log('Database connected!');
  } catch (error) {
    console.error('Database connection failed:', error);
    process.exit(1);
  }
};
