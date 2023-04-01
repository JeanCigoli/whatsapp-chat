import 'dotenv/config';
import { stringToBoolean } from '../text';

export const SERVER = {
  ENABLED: process.env.SERVER_ENABLED !== 'false',
  PORT: process.env.SERVER_PORT || 3000,
  BASE_URI: process.env.SERVER_BASE_URI || '',
};

export const CONSUMER = {
  ENABLED: process.env.CONSUMER_ENABLED !== 'false',
};

export const SCHEDULER = {
  ENABLED: process.env.SCHEDULER_ENABLED !== 'false',
};

export const LOGGER = {
  DB: {
    ENABLED: stringToBoolean(process.env.LOGGER_DB_ENABLED) || false,
  },
  CONSOLE: { LEVEL: process.env.LOGGER_CONSOLE_LEVEL || 'info' },
};

export const ENCRYPTION = {
  KEY: process.env.ENCRYPTION_KEY || '',
  IV: process.env.ENCRYPTION_IV || '',
};

export const API = {
  WHATSAPP: process.env.API_WHATSAPP || '',
};

export const DB = {
  DIALECT: process.env.DB_DIALECT || 'pg',
  HOST: process.env.DB_HOST || '',
  USERNAME: process.env.DB_USERNAME || '',
  PASSWORD: process.env.DB_PASSWORD || '',
  PORT: process.env.DB_PORT || 1433,
};

export const RABBIT = {
  USER: process.env.RABBIT_USER || '',
  PASSWORD: process.env.RABBIT_PASSWORD || '',
  HOST: process.env.RABBIT_HOST || '',
  PORT: process.env.RABBIT_PORT || 5672,
};

export const REPROCESSING = {
  ENABLED: stringToBoolean(process.env.REPROCESSING_ENABLED) || false,
  MAX_TRIES: Number(process.env.REPROCESSING_MAX_TRIES) || 1,
  DELAYS: process.env.REPROCESSING_DELAYS?.split(',').map(Number) || [],
};
