const express = require("express");
const morgan = require("morgan");
const loader = require("./loader");

const { listRecordsController } = require("./controller");
const { validate, errorHandler } = require("./middlewares");
const { listRecordsSchema } = require("./model");

async function run() {
  await loader();

  const app = express();
  app.use(express.json());
  app.use(morgan("short"));
  app.post("/", validate(listRecordsSchema), listRecordsController);
  app.use(errorHandler);

  return app;
}

module.exports = run;
