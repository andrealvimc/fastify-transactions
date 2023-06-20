import { FastifyInstance } from 'fastify'
import { randomUUID } from 'node:crypto'

import { knex } from '../../database'

export async function transactionsRoutes(app: FastifyInstance) {
  app.post('/', async (request, reply) => {
    const { title, value, type, category }: any = request.body

    if (!title || !value || !type || !category)
      return reply.status(400).send({ error: 'Missing required data' })

    const transaction = await knex('transactions')
      .insert({
        id: randomUUID(),
        title,
        value,
        type,
        category,
      })
      .returning('*')

    return transaction
  })

  app.get('/', async (request, reply) => {
    const transactions = await knex('transactions').select('*')

    return transactions
  })
}
