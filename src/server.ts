import fastify, { FastifyPluginAsync } from 'fastify'
import { transactionsRoutes } from './features/transactions'

export const app = fastify({ logger: true })

const routes: Array<[string, FastifyPluginAsync]> = [
  ['/transactions', transactionsRoutes],
]

routes.forEach(([prefix, route]) => app.register(route, { prefix }))

app.listen({ port: 3333 }).then(() => console.log('Server is running'))
