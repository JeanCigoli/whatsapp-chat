import pkg from '@/../package.json';
import { LOGGER } from '@/util/constants';
import { generateUuid } from '@/util/uuid';
import path from 'path';
import { Logger, createLogger, format, transports } from 'winston';
import DailyRotateFile from 'winston-daily-rotate-file';

import { cli, standard } from './formats';
import { GenericTransport } from './transports';

type LogParams = {
  level:
    | 'error'
    | 'warn'
    | 'info'
    | 'http'
    | 'verbose'
    | 'debug'
    | 'silly'
    | String;
  message: string;
  payload?: object;
  meta?: object;
  [key: string]: unknown;
};

const { combine, timestamp, colorize } = format;

const defaultTimestampFormat = timestamp({ format: 'YYYY-MM-DD HH:mm:ss' });

export class CustomLogger {
  private static instance: CustomLogger;

  private logger!: Logger;

  constructor() {
    this.logger = createLogger({
      transports: [
        new DailyRotateFile({
          filename: 'logs',
          extension: '.log',
          datePattern: 'YYYY-MM-DD',
          dirname: path.resolve('log'),
          level: 'debug',
          format: combine(defaultTimestampFormat, standard),
        }),
        new transports.Console({
          level: LOGGER.CONSOLE.LEVEL,
          format: combine(defaultTimestampFormat, cli, colorize({ all: true })),
        }),
      ],
    });
  }

  public static getInstance(): CustomLogger {
    if (!CustomLogger.instance) {
      CustomLogger.instance = new CustomLogger();
    }

    return CustomLogger.instance;
  }

  public log(error: Error): void;
  public log(params: LogParams): void;
  public log(params: LogParams | Error): void {
    const application = { name: pkg.name ?? 'nodejs-application' };

    if (params instanceof Error) {
      this.logger.log({
        traceId: generateUuid(),
        application,
        name: params.name,
        message: params.message,
        stack: params.stack,
        level: 'error',
      });

      return;
    }

    const { level, message, ...rest } = params;

    this.logger.log({
      traceId: generateUuid(),
      application,
      message,
      level: <string>level,
      ...rest,
    });
  }
}
