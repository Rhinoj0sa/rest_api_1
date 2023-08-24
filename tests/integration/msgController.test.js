const request = require("supertest");
const app = require("../../index.js");
const endpointUrl = "/messages/";

describe("POST " + endpointUrl, () => {
    it("should return 400 on invalid category", async () => {
        const response = await request(app)
            .post(endpointUrl)
            .send({
                category: "invalid",
                message: "test message"
            });
        expect(response.statusCode).toBe(400);
    });
    it("should return 400 on empty message", async () => {
        const response = await request(app)
            .post(endpointUrl)
            .send({
                category: "Sports",
                message: ""
            });
        expect(response.statusCode).toBe(400);
    });
    it("should return 201 on valid category and message", async () => {
        const response = await request(app)
            .post(endpointUrl)
            .send({
                category: "Sports",
                message: "test message"
            });
        expect(response.statusCode).toBe(201);
    });
}
);