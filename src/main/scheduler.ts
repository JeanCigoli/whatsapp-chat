import { sqlConnection } from '@/infra/db/mysql/util';
import { logger, Scheduler } from '@/util';

import { schedulerSetup } from './configs/scheduler';

const scheduler = new Scheduler();

(async () => {
  try {
    const sqlPromise = sqlConnection.raw('SELECT 1');

    await Promise.all([sqlPromise]);
  } catch (error) {
    logger.log(error);
  }
})();

logger.log({ level: 'info', message: 'Scheduler started!' });
schedulerSetup(scheduler);
