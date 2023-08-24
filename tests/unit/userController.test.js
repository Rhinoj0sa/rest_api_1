const userController = require('../../controllers/userController');
// const User = require('../../models/User');
const httpMocks = require('node-mocks-http');

describe('userController', () => {
    test('should be defined', () => expect(typeof userController.newUser).toBe("function"));
    test('should return 201 if user is valid', async () => {
        const req = httpMocks.createRequest({
            method: 'POST',
            url: '/user',
            body: {
                "name": "Juan Gonzalez",
                "email": "njuanw@abc.com",
                "phone": "1234567890",
                "suscribed": ["Finance"],
                "channels": ["Push"]
            }
        });
        const res = httpMocks.createResponse();
        await userController.newUser(req, res);
        expect(res.statusCode).toBe(201);
        // expect(res._getData()).toBe('User added successfully');
    });
    
});