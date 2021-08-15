const io = require('socket.io-client')

const socket = io('http://localhost:3000')

socket.on('connect', () => {
  console.log(`Client ${socket.id} connected!`)
})

socket.on('message', (message) => {
  console.log(message)
})

socket.on('disconnect', () => {
  console.log('Server disconnected!')
})

