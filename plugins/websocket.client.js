import io from 'socket.io-client'

const config = useRuntimeConfig()

export default defineNuxtPlugin(() => {
  if (process.server) {
    return
  }

  const socket = io(config.public.baseUrl, {
    rejectUnauthorized: false
  })

  return {
    provide: {
      socket
    }
  }
})