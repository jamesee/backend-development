const express = require('express')
const logger = require('morgan')
const cron = require('node-cron')

const app = express()
app.use(logger('common'))

const PORT = 3000
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`)
})

cron.schedule('*/5 * * * * *', () => {
  // Do some task
  console.log('Running a task every 5 seconds!')
})