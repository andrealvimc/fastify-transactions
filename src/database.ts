import { knex as setupKnex, Knex } from 'knex'

export const config: Knex.Config = {
  client: 'sqlite',
  connection: {
    filename: './database/app.db',
  },
  migrations: {
    extension: 'ts',
    directory: './database/migrations',
  },
  useNullAsDefault: true,
}

export const knex = setupKnex(config)
