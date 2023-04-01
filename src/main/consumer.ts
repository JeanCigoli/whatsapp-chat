import { sqlConnection } from '@/infra/db/mysql/util';
import { rabbitMqServer } from '@/infra/mq/utils';
import { consumersSetup } from '@/main/configs/consumers';
import { logger, RABBIT } from '@/util';

(async () => {
  try {
    const server = rabbitMqServer();

    server.setCredentials({
      user: RABBIT.USER,
      password: RABBIT.PASSWORD,
      host: RABBIT.HOST,
      port: +RABBIT.PORT,
    });

    const rabbitPromise = server.start();

    const sqlPromise = sqlConnection.raw('SELECT 1');

    await Promise.all([rabbitPromise, sqlPromise]);

    consumersSetup(server);
    logger.log({ level: 'info', message: 'Consumer started!' });
  } catch (error) {
    logger.log(error);
  }
})();
