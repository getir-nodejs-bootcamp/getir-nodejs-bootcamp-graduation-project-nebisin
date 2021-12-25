const express = require("express");
const morgan = require("morgan");

const { listRecordsController } = require("./controller");
const { validate, errorHandler } = require("./middlewares");
const { listRecordsSchema } = require("./model");

const app = express();
app.use(express.json());
app.use(morgan("short"));
app.post("/", validate(listRecordsSchema), listRecordsController);
app.use(errorHandler);

module.exports = app;
