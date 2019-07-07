const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/test', {useNewUrlParser: true, useFindAndModify: false})


module.exports = mongoose.model('Student', {
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number
    },
    gender: {
        type: Number,
        enum: [0, 1],
        default: 0
    }
})
