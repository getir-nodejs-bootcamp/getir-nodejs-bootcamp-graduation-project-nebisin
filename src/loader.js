const mongo = require("./mongo");

async function loadMongoDB() {
  await mongo.init();
}

module.exports = () => {
  loadMongoDB();
};
