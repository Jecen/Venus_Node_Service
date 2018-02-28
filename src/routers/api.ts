/**
 *  what => api模块名称
 *  type => api功能名称
 */

const apiHandler = async (ctx: any, next: any) => {
  const params = ctx.params
  const { request: { method } } = ctx

  let response: object

  ctx.set({
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Credentials': true,
  })
  ctx.set('Access-Control-Allow-Origin', '*')
  method === 'OPTIONS' && ctx.set({
    'Access-Control-Allow-Methods': 'POST, GET, DELETE, PUT, OPTIONS'
  })

  switch (params.what) {
    default:
      response = { error: `no such ${params.what}/${params.type} type api !` }
      break;
  }

  ctx.body = response
}

export default apiHandler