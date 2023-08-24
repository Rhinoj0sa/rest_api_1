const request = require("supertest");
const app = require("../../index.js");
const endpointUrl = "/user/";

describe("POST " + endpointUrl, () => {
    it("should return 201 on valid user", async () => {
        const response = await request(app)
            .post(endpointUrl)
            .send({
                name: "Juan Gonzalez",
                email: "juan@dom.com",
                phone: "1234567890",
                suscribed: ["Sports"],
                channels: ["SMS"]
            });
           
        expect(response.statusCode).toBe(201);
    }
    );
}
);

                
                