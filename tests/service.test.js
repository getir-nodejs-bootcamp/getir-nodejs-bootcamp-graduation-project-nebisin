require("dotenv").config();
const mongo = require("../src/mongo");

describe("list records service", () => {
  beforeAll(async () => {
    await mongo.init();
  });

  afterAll(async () => {
    await mongo.close();
  });

  it("should return array of records", async () => {
    const { listRecordsService } = require("../src/service");

    const data = {
      startDate: new Date("2016-01-26"),
      endDate: new Date("2018-02-02"),
      minCount: 2700,
      maxCount: 3000,
    };

    try {
      const records = await listRecordsService(data);
      expect(records.length).not.toBe(0);
      expect(records[0].key).toBeDefined();
      expect(records[0].totalCount).toBeGreaterThan(data.minCount);
      expect(records[0].totalCount).toBeLessThan(data.maxCount);
      expect(records[0].createdAt).toBeDefined();
      expect(records[0].createdAt.getTime()).toBeGreaterThan(
        data.startDate.getTime()
      );
      expect(records[0].createdAt.getTime()).toBeLessThan(
        data.endDate.getTime()
      );
    } catch (err) {
      console.log(err);
      expect(err).toBeNull();
    }
  });
});
