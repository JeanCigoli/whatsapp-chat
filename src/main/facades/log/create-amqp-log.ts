import { generateUuid, logger, LOGGER } from '@/util';

export const createAmqpLog = async (payload: object): Promise<void> => {
  if (!LOGGER.DB.ENABLED) return;

  logger.log({
    level: 'info',
    message: 'APM LOG AMQP',
    type: 'AMQP',
    traceId: generateUuid(),
    ...payload,
  });
};
