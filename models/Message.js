const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const messageSchema = new Schema({
    text: {
        type: String,
        trim: true
    },
    category: {
        type: String,
        trim: true
    },

}, { timestamps: true });
module.exports = mongoose.model('Message', messageSchema); 