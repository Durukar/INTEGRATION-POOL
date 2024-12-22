import { Hono } from 'hono'
import { workerClientRouter } from './routes/client/worker-client'

const server = new Hono<HonoContext>()

// /* ROUTES */
server.route('/', workerClientRouter)

export default {
  fetch: server.fetch,
}
