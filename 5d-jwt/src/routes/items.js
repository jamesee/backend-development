const express = require('express')
const Item = require('../models/item')

module.exports = (db) => {
  const router = express.Router()
  
  router.post('/', async (req, res, next) => {
    const uid = req.uid
    const { name, quantity } = req.body
    const newItem = new Item({ name, quantity, uid })
    const item = await db.insertItem(newItem)
    res.status(201).send(item)
  })

  // router.get('/', async (req, res, next) => {
  //   const items = await db.findAllItems()
  //   res.send(items)
  // })

  //homework 17Aug
  router.get('/', async (req, res, next) => {
    const uid = req.uid
    const items = await db.findAllItems(uid)
    res.send(items)
  })

  router.get('/:id', async (req, res, next) => {
    const id = req.params.id
    const item = await db.findItem(id)
    if (item) {
      res.send(item)
    } else {
      res.status(400).send(`Item id ${id} not found`)
    }
  })

  // router.put('/:id', async (req, res, next) => {
  //   const uid = req.uid
  //   const id = req.params.id
  //   const { name, quantity } = req.body
  //   const updatedItem = new Item({ name, quantity, uid })
  //   const item = await db.updateItem(id, updatedItem)
  //   res.send(item)
  // })

  //homework 17Aug
  router.put('/:id', async (req, res, next) => {
    const uid = req.uid
    const id = req.params.id
    const { name, quantity } = req.body
    const updatedItem = new Item({ name, quantity, uid })
    const item = await db.updateItemByUid(id, updatedItem)
    const itemExist = await db.findItem(id)

    item ?  res.status(200).send(item) : 
            itemExist? res.status(401).send(`Item id ${id} does not belong to user`) :
                       res.status(404).send(`Item id ${id} not found`)
  })

  router.delete('/:id', async (req, res, next) => {
    const id = req.params.id
    const success = await db.deleteItem(id)
    if (success) {
      res.status(204).send(`Deleted item ${id} successfully`)
    } else {
      res.status(400).send(`Item id ${id} not found`)
    }
  })

  return router
}