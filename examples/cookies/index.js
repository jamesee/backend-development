const express = require('express')
const logger = require('morgan')
const cookieParser = require('cookie-parser')

const app = express()
app.use(logger('common'))
app.use(cookieParser())

const authMiddleware = (req, res, next) => {
  const token = req.cookies.token
  if (token) next()
  else res.status(401).send('Unauthorized')
}

app.post('/register', (req, res, next) => {
  // register user and generate token
  const token = 'example_token'
  res.cookie('token', token, {
    httpOnly: true
  }).send('Registered user successfully')
})

app.get('/', authMiddleware, (req, res, next) => {
  res.send('Hello world!')
})

const PORT = 3000
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`)
})