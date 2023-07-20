const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let cardSchema = new Schema({
    name: {
        type: String
    },
    email: {
        type: String
    }
}, {
        collection: 'cards'
    })
module.exports = mongoose.model('Card', cardSchema)