import { Server } from 'socket.io'

let io
global.clients = []

export default defineEventHandler((event) => {
  if (!io) {
    try {
      io = new Server(event.node.res.socket?.server )

      io.on('connection', (socket) => {
        socket.on('disconnecting', (data) => {
          global.clients = global.clients.filter(client => client.socketId !== socket.id)
        })

        socket.on('register', (id, cb) => {
          if (!global.clients.find(client => client.id === id)) {
            global.clients.push({
              id: id,
              socketId: socket.id,
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
