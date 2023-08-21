const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const channelSchema = new Schema({
    name: {
        type: String,
        trim: true
    },
    description: {
        type: String,
        trim: true
    },

}, { timestamps: true });
module.exports = mongoose.model('Channel', channelSchema); 