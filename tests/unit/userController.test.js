const userController = require('../../controllers/userController');
const httpMocks = require('node-mocks-http');

describe('userController', () => {
    test('should be defined', () => expect(typeof userController.newUser).toBe("function"));
});