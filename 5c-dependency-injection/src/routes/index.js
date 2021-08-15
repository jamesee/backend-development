const express = require('express')

module.exports = (db) => {
  const router = express.Router()

  router.get('/', (req, res, next) => {
    res.send('Hello world!')
  })

  router.use('/items', require('./items')(db))

  return router
}
