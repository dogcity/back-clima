import express from 'express'
import http from 'http'

const app = express()
const servidor = http.createServer(app)

servidor.listen(3001, () => console.log('Servidor iniciado'))
