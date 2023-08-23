const messageController = require('../../controllers/messageController');
const Message = require('../../models/Message');
const User = require('../../models/User');
const Notification = require('../../models/Notification');
const MsgCategories = require('../../models/MsgCategories');
const { it } = require('node:test');
// const { describe } = require('yargs');

describe('messageController', () => {
    console.log(`typeof messageController.newMessage: ${typeof messageController.newMessage}`);
    test('should be defined', () => expect(typeof messageController.newMessage).toBe("function"));
})