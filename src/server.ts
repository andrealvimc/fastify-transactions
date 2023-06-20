import fastify, { FastifyPluginAsync } from 'fastify'

import { transactionsRoutes } from './features/transactions'
import { env } from './helpers/env'

export const app = fastify({ logger: true })

const routes: Array<[string, FastifyPluginAsync]> = [
  ['/transactions', transactionsRoutes],
]

routes.forEach(([prefix, route]) => app.register(route, { prefix }))

app.listen({ port: env.PORT }).then(() => console.log('Server is running'))
