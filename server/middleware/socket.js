import { Server } from 'socket.io'

let io
global.clients = []

export default defineEventHandler((event) => {
  if (!io) {
    try {
      io = new Server(event.node.res.socket?.server )

      io.on('connection', (socket) => {
        console.log("CONNECTION", socket.id)

        socket.on('disconnecting', (data) => {
          console.log('disconnecting', data, socket.id)
        })

        socket.on('message', (data) => {
          console.log('message received: %s', data, socket.id)
        })

        socket.on('register', (id, cb) => {
          console.log('registered: %s', id, socket.id)

          if (!global.clients.find(client => client.id === id)) {
            global.clients.push({
              id: id,
              send: (data) => socket.emit('custom', data)
            })
          }
          cb()
        })
      })
    } catch (error) {
      console.error(error)
    }
  }
})
