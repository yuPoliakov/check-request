import io from 'socket.io-client'

export default defineNuxtPlugin(() => {
  if (process.server) {
    return
  }
   
  // const wsProtocol = window.location.protocol === 'https:' ? 'wss:' : 'ws:'
  // const socket = new WebSocket(`${wsProtocol}//${window.location.host}`)
  const socket = io('http://localhost:3000')

  return {
    provide: {
      socket
    }
  }
})