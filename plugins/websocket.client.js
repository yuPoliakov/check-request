import io from 'socket.io-client'

export default defineNuxtPlugin(() => {
  if (process.server) {
    return
  }

  const socket = io('https://check-request.com', {
    rejectUnauthorized: false
  })

  return {
    provide: {
      socket
    }
  }
})