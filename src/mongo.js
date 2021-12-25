const { MongoClient } = require("mongodb");

class Mongo {
  constructor() {
    const url = process.env.MONGO_URI;
    this.client = new MongoClient(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  }
  async init() {
    try {
      await this.client.connect();
      console.log("Connected to MongoDB");

      this.db = this.client.db(process.env.MONGO_DB);
      this.Records = this.db.collection("records");
    } catch (error) {
      console.error(error);
    }
  }
}

module.exports = new Mongo();
