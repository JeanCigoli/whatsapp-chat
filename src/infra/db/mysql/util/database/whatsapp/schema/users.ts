import { makeTableBuilder } from '../../../schema';

const builder = makeTableBuilder({
  database: 'whatsapp',
  tablePrefix: 'tb_',
});

export const USERS = {
  INTERNAL_USER: builder({
    table: 'tb_internal_users',
    columns: <const>[
      'users_id',
      'users_type_id',
      'name',
      'email',
      'password',
      'external_id',
      'created_at',
      'updated_at',
      'deleted_at',
    ],
  }),
  USERS: builder({
    table: 'tb_users',
    columns: <const>[
      'users_id',
      'users_type_id',
      'companies_id',
      'name',
      'email',
      'password',
      'document',
      'external_id',
      'created_at',
      'updated_at',
      'deleted_at',
    ],
  }),
  USER_TYPE: builder({
    table: 'tb_users_type',
    columns: <const>['users_type_id', 'type', 'external_id'],
  }),
};
