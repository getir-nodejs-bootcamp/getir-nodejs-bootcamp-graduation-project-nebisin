const mongo = require("./mongo");

module.exports = async () => {
  await mongo.init();
};
