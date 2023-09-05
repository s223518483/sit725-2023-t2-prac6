const { expect } = require("chai");
const request = require("request");

let kitchen = {
	title: "test kitchen title",
	subTitle: "test kitchen subtitle",
	path: "test kitchen path",
	description: "test kitchen description",
};

describe("Test function API Get All Kitchen	", function () {
	it("expected status code 200", function (done) {
		request(
			"http://localhost:3000/api/kitchen",
			function (error, response, body) {
				//console.log(arguments);
				let bodyObj = JSON.parse(body);
				expect(bodyObj.statusCode).to.equal(200) &&
					expect(bodyObj.message).to.equal("get all kitchen success");
				done();
			}
		);
	});
});

describe("Test function API Post Kitchen", function () {
	it("expected status code 201", function (done) {
		request.post(
			{ url: "http://localhost:3000/api/kitchen", form: kitchen },
			function (error, response, body) {
				let bodyObj = JSON.parse(body);
				//console.log(body);
				expect(bodyObj.statusCode).to.equal(201) &&
					expect(bodyObj.message).to.equal("success");
				done();
			}
		);
	});
});

describe("Test function API Delete one Kitchen ", function () {
	it("expected status code 202", function (done) {
		request.delete(
			{ url: "http://localhost:3000/api/kitchen", form: kitchen },
			function (error, response, body) {
				let bodyObj = JSON.parse(body);
				expect(bodyObj.statusCode).to.equal(202) &&
					expect(bodyObj.message).to.equal("deleted");
				done();
			}
		);
	});
});
