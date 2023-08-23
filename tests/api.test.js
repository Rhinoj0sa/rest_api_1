const request = require('supertest');
const baseURL = 'http://localhost:3000';
const {describe, it} = require('mocha');
describe('GET /', function () {
        it('responds with json', function (done) {
            request('http://localhost:3000')
                .get('/test')
                .set('Accept', 'application/json')
                .expect('Content-Type', /json/)
                .expect(200, done);
        });
    }
);