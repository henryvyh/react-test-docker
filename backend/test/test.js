let chai = require("chai");
let chaiHttp = require("chai-http");
let server = require("../index");

chai.should();
chai.use(chaiHttp);

describe("Test Api", () => {
	describe("GET /api/files/data", () => {
		it("It get", (done) => {
			chai
				.request(server)
				.get("/api/files/data")
				.end((e, resp) => {
					resp.should.have.status(200);
					resp.body.should.be.a("array");
					resp.body.length.should.eq(4);
					done();
				});
		});
	});

	describe("GET /api/files/list", () => {
		it("It get", (done) => {
			chai
				.request(server)
				.get("/api/files/list")
				.end((e, resp) => {
					resp.should.have.status(200);
					resp.body.should.be.a("array");
					resp.body.length.should.eq(5);
					done();
				});
		});
	});
});
