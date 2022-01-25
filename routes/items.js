const express = require('express')
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
router.get('/:id', (req, res) => {
    res.send
})
router.post('/', (req, res) => {

})

router.patch('/:id', (req, res) => {

})
router.delete('/:id', (req, res) => {

})



module.exports = router