import {
  CreateExampleRepository,
  GetExampleRepository,
} from '@/data/protocols/db/example';
import { WHATSAPP_DB, Repository } from '@/infra/db/mysql/util';
import { convertCamelCaseKeysToSnakeCase, transform } from '@/util/object';

const {
  USERS: { INTERNAL_USER, USER_TYPE },
} = WHATSAPP_DB;

export class ExampleRepository
  extends Repository
  implements CreateExampleRepository, GetExampleRepository
{
  async get(): GetExampleRepository.Result {
    const connection = await this.getConnection();

    return connection(INTERNAL_USER.TABLE)
      .innerJoin(
        USER_TYPE.TABLE,
        USER_TYPE.COLUMNS.USERS_TYPE_ID,
        INTERNAL_USER.COLUMNS.USERS_TYPE_ID
      )
      .select(INTERNAL_USER.RAW_COLUMNS)
      .whereNotNull(INTERNAL_USER.COLUMNS.DELETED_AT);
  }
  async create(
    params: CreateExampleRepository.Params
  ): CreateExampleRepository.Result {
    const connection = await this.getConnection();

    const data = transform(params).pipe(convertCamelCaseKeysToSnakeCase).get();

    const [record] = await connection(INTERNAL_USER.TABLE)
      .insert(data)
      .whereNotNull(INTERNAL_USER.COLUMNS.DELETED_AT)
      .returning('*');

    return {
      record,
      transaction: this.transactionAdapter(connection),
    };
  }
}
