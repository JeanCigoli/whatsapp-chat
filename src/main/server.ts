import { sqlConnection } from '@/infra/db/mysql/util/connection';
import { logger } from '@/util';
import { SERVER } from '@/util/constants';

import { application } from './application';

application.onStart(async () => {
  try {
    const sqlPromise = sqlConnection.raw('SELECT 1');

    await Promise.all([sqlPromise]);
  } catch (error) {
    logger.log(error);
    throw error;
  }
});

application.listenAsync(SERVER.PORT, () => {
  logger.log({
    level: 'info',
    message: `Server is running on port: ${SERVER.PORT}`,
  });
});
