require("dotenv").config();
const request = require("supertest");
const app = require("../src/app");
jest.mock("../src/mongo");

describe("POST /", () => {
  it("should return array of records", async () => {
    const data = {
      startDate: new Date("2016-01-26"),
      endDate: new Date("2018-02-02"),
      minCount: 2700,
      maxCount: 3000,
    };

    const response = await request(app).post("/").send(data);

    expect(response.body.code).toBe(0);
  });

  it("should return 400 code because startDate is not a valid date", async () => {
    const data = {
      startDate: "not a date",
      endDate: new Date("2018-02-02"),
      minCount: 2700,
      maxCount: 3000,
    };

    const response = await request(app).post("/").send(data);

    expect(response.body.code).toBe(400);
  });

  it("should return 400 code because minCount is not exist", async () => {
    const data = {
      startDate: new Date("2016-01-26"),
      endDate: new Date("2018-02-02"),
      maxCount: 3000,
    };

    const response = await request(app).post("/").send(data);

    expect(response.body.code).toBe(400);
  });
});
