import io from 'socket.io-client'

export default defineNuxtPlugin(() => {
  if (process.server) {
    return
  }

  const socket = io('https://127.0.0.1:3000')

  return {
    provide: {
      socket
    }
  }
})