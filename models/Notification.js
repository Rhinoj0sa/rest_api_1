const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const notificationSchema = new Schema({
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
    message: {
        type: String,
        trim: true
    },
    category: {
        type: String,
        trim: true
    },
    channel:{
        type: String,
        trim: true
    },
    sent: {
        type: Boolean,
        default: false
    }
},{timestamps:true});
module.exports = mongoose.model('Notification', notificationSchema);