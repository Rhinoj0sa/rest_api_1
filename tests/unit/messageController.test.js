const messageController = require('../../controllers/messageController');
// const Message = require('../../models/Message');
// const User = require('../../models/User');
// const Notification = require('../../models/Notification');
// const MsgCategories = require('../../models/MsgCategories');
const httpMocks = require('node-mocks-http');


describe('messageController', () => {
    test('should be defined', () => expect(typeof messageController.newMessage).toBe("function"));
    test('should return 400 if category is not valid', async () => {
        const req = httpMocks.createRequest({
            method: 'POST',
            url: '/messages',
            body: {
                category: 'invalid',
                message: 'test message'
            }
        });
        const res = httpMocks.createResponse();
        await messageController.newMessage(req, res);
        expect(res.statusCode).toBe(400);
        expect(res._getData()).toBe('category field is required');
    }
    );
    test('should return 400 if message is empty', async () => {
        const req = httpMocks.createRequest({
            method: 'POST',
            url: '/messages',
            body: {
                category: 'Sports',
                message: ''
            }
        });
        const res = httpMocks.createResponse();
        await messageController.newMessage(req, res);
        expect(res.statusCode).toBe(400);
        expect(res._getData()).toBe('message is required');
    }
    );
});