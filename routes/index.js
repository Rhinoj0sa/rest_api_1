const express = require('express');
const router = express.Router();

const messageController = require('../controllers/messageController.js');
const userController = require('../controllers/userController.js');

module.exports = function () {
    router.post('/messages', messageController.newMessage);
    router.post('/user', userController.newUser);
    return router;
}
