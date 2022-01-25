const mongoose = require('mongoose')

const itemsSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    itemsToStore: {
        type: String,
        required: true
    },
    itemDate: {
        type: Date,
        required: true,
        default: Date.now
    }

})
module.exports = mongoose.model('Items', itemsSchema)