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
          rawBody: parseJSON(rawBody),
          params
        })
      }
    })

    return { statusCode: 200 }
  } catch (error) {
    return { message: error.message, error: true};
  }
});

function parseJSON(json) {
  try {
    if (!json.length) {
      return ''
    }

    return JSON.parse(json)
  } catch (error) {
    return json
  }
}