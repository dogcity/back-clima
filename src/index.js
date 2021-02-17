import express from 'express'
import http from 'http'
import socketio from 'socket.io'

const app = express()
const servidor = http.createServer(app)
const io = socketio(servidor, {
  cors: {
    origin: '*',
    methods: ['GET', 'POST'],
  },
})

io.on('connection', (socket) => {
  socket.on('conectado', () => {
    console.log('usuario conectado', socket.id)
  })

  socket.on('registrar', (action) => {
    console.log('Acción registrada', action)
  })
})

servidor.listen(3001, () => console.log('Servidor iniciado'))
