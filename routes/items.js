const express = require('express')
const items = require('../models/items')
const router = express.Router()
const Items = require('../models/items')

router.get('/', async (req, res) => {
    // res.send('first get')
    try {
        const items = await Items.find()
        res.json(items)
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
})
router.get('/:id', getItems, (req, res) => {
    res.json(res.items)
})
router.post('/', async (req, res) => {
    const items = new Items({
        name: req.body.name,
        itemsBought: req.body.itemsBought
    })
    try {
        const newItems = await items.save()
        res.status(201).json(newItems)
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
})

router.patch('/:id', getItems, async (req, res) => {
    if (req.body.name != null) {
        res.items.name = req.body.name
    }
    if (req.body.itemsBought != null) {
        res.items.itemsBought = req.body.itemsBought
    }
    try {
        const updatedItems = await res.items.save()
        res.json(updatedItems)
    } catch (err) {
        res.status(400).json({ message: err.message })
    }

})
router.delete('/:id', getItems, async (req, res) => {
    try {
        await res.items.remove()
        res.json({ message: 'item deleted' })
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
})

async function getItems(req, res, next) {
    let items
    try {
        items = await Items.findById(req.params.id)
        if (items == null) {
            return res.status(404).json({ message: 'Cannot find the items' })
        }
    } catch (err) {
        return res.status(500).json({ message: err.message })
    }

    res.items = items
    next()
}


module.exports = router