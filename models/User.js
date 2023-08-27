const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const userSchema = new Schema({
    name: {
        type: String,
        trim: true
    },
    email: {
        type: String,
        lowercase: true,
        trim: true
    },
    phone: {
        type: String,
        trim: true
    },
    subscribed: [],
    channels: []
});
module.exports = mongoose.model('User', userSchema); 