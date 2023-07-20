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
        collection: 'users'
    })
module.exports = mongoose.model('User', cardSchema)