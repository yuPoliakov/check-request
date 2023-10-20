export default defineEventHandler(async (event) => {
  try {
    let rawBody = ''
    await new Promise((resolve, reject) => {
      event.node.req.setEncoding('utf8');
      event.node.req.on('data', (chunk) => {
        rawBody += chunk
      })
      event.node.req.on('end', (chunk) => {
        resolve()
      })
    })

    const params = getQuery(event)

    global.clients?.forEach((client) => {
      if (client.id === event.context.params.id) {
        console.log('sending a message')
        client.send({
          headers: event.node.req.rawHeaders,
          rawBody: rawBody.length ? JSON.parse(rawBody) : '',
          params
        })
      }
    })

    return { headers: event.node.req.rawHeaders, rawBody: JSON.parse(rawBody) }
  } catch (error) {
    return { message: error.message, error: true};
  }
});