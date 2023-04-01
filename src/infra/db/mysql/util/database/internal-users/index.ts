import { makeTableBuilder } from '../../schema';

const builder = makeTableBuilder({
  database: 'whatsapp',
  tablePrefix: 'tb_',
});

export const EXAMPLE_DB = {
  EXAMPLE: {
    EXAMPLE: builder({
      table: '[tb_internal_users]',
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
  },
};
