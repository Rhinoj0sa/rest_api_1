const express = require('express');
const router = express.Router();

const messageController = require('../controllers/messageController.js');
const userController = require('../controllers/userController.js');
const notificationController = require('../controllers/notificationController.js');

module.exports = function () {
    router.post('/messages', messageController.newMessage);
    router.get('/messages', messageController.getMessages);
    router.get('/notifications', notificationController.getNotifications);
    router.post('/user', userController.newUser);
    router.post('/user/seed', userController.seed);
    
    return router;
}
