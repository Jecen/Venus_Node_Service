import * as Router from 'koa-router'
import ApiHandle from './api'

const router: Router = new Router()

router
  .get('/', async (ctx, next) => {
    ctx.body = '!!!'
  })
  // mock web UI api
  .get('/api/:what/:type', ApiHandle)
  .post('/api/:what/:type', ApiHandle)
  .del('/api/:what/:type', ApiHandle)
  .put('/api/:what/:type', ApiHandle)
  .options('/api/:what/:type', ApiHandle)

export default router