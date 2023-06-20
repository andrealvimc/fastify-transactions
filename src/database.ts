import 'dotenv/config'
import { knex as setupKnex, Knex } from 'knex'
import { env } from './helpers/env'

export const config: Knex.Config = {
  client: 'sqlite',
  connection: {
    filename: env.DATABASE_URL,
  },
  migrations: {
    extension: 'ts',
    directory: env.DATABASE_MIGRATION_PATH,
  },
  useNullAsDefault: true,
}

export const knex = setupKnex(config)
