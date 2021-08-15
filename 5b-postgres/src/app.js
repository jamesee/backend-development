const express = require('express')
const logger = require('morgan')
require('dotenv').config()


const app = express()
app.use(express.json())
app.use(logger('common'))

app.use(require('./routes'))

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`)
})