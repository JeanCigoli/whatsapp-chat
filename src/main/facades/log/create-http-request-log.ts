import { generateUuid, logger, LOGGER } from '@/util';

type Params = { url: string; request: object; response: object };

export const createHttpRequestLog = async (params: Params): Promise<void> => {
  if (!LOGGER.DB.ENABLED) return;

  logger.log({
    level: 'info',
    message: 'HTTP LOGGER',
    type: 'HTTP',
    traceId: generateUuid(),
    ...params,
  });
};
