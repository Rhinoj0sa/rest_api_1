const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const msgCategoriesSchema = new Schema({
    name: {
        type: String,
        trim: true
    },
    description: {
        type: String,
        trim: true
    }
});
module.exports = mongoose.model('MsgCategories', msgCategoriesSchema);