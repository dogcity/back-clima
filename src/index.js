const express = require('express')
const http = require('http')
const app = express()

const servidor = http.createServer(app)

servidor.listen(3001, () => console.log('Servidor iniciado'))
