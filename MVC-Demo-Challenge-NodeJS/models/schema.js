const mongoose = require('mongoose');
const Schema = mongoose.Schema
const newSchema =  new Schema({
    title: {
        type: String,
        minlength: 15,
        required:true
    },
    article: {
        type: String,
        minlength: 40,
        required: true
    }
})

const Article = mongoose.model('Article', newSchema)

module.exports = { Article }