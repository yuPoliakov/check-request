import io from 'socket.io-client'

export default defineNuxtPlugin(() => {
  if (process.server) {
    return
  }

  const socket = io(`${window.location.protocol}//${window.location.host}`)

  return {
    provide: {
      socket
    }
  }
})