const router = require('express').Router()
const db = require('../db')
const Item = require('../models/item')

router.get('/', (req, res, next) => {
  res.send('Hello world!')
})

router.post('/items', async (req, res, next) => {
  const { name, quantity } = req.body
  const newItem = new Item({ name, quantity })
  const item = await db.insertItem(newItem)
  res.status(201).send(item)
})

router.get('/items', async (req, res, next) => {
  const items = await db.findAllItems()
  res.send(items)
})

router.get('/items/:id', async (req, res, next) => {
  const id = req.params.id
  const item = await db.findItem(id)
  if (item) {
    res.send(item)
  } else {
    res.status(400).send(`Item id ${id} not found`)
  }
})

router.put('/items/:id', async (req, res, next) => {
  const id = req.params.id
  const { name, quantity } = req.body
  const updatedItem = new Item({ name, quantity })
  const item = await db.updateItem(id, updatedItem)
  res.send(item)
})

router.delete('/items/:id', async (req, res, next) => {
  const id = req.params.id
  const success = await db.deleteItem(id)
  if (success) {
    res.send(`Deleted item ${id} successfully`)
  } else {
    res.status(400).send(`Item id ${id} not found`)
  }
})

module.exports = router
