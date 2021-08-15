const express = require('express')
const logger = require('morgan')
const multer  = require('multer')

// Multer
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './uploads')
  },
  filename: function (req, file, cb) {
    const filename = file.fieldname + '-' + Date.now()
    cb(null, filename)
  }
})
const upload = multer({ storage: storage })

// Express app
const app = express()
app.use(logger('common'))

app.post('/profile', upload.single('avatar'), function (req, res, next) {
  // req.file is the `avatar` file
  // req.body will hold the text fields, if there were any
  console.log(req.file, req.body)
  res.send()
})

const PORT = 3000
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`)
})