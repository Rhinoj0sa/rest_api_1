const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const usersSchema = new Schema({
    fullName: {
        type: String,
        trim: true
    },
    email: {
        type: String,
        unique: true,
        lowercase: true,
        trim: true
    },
    telefono: {
        type: String,
        trim: true
    },
    suscribed: [],
    channels: []
});
module.exports = mongoose.model('Users', clientesSchema); 