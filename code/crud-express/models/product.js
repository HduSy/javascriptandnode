const mongoose = require('mongoose')

module.exports = mongoose.model('Product', {
    productId: {
        type: String,
        required: true
    },
    productName: {
        type: String,
        required: true
    },
    productPrice: {
        type: Number,
        required: true
    },
    productRepertory: {
        type: Number,
        required: false
    }
})
