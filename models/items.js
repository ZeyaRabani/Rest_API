const mongoose = require('mongoose')

const itemsSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    itemsBought: {
        type: String,
        required: true
    },
    itemsDate: {
        type: Date,
        required: true,
        default: Date.now
    }

})
module.exports = mongoose.model('Items', itemsSchema)