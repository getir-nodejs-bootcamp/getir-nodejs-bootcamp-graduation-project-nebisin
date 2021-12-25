const express = require("express");
const morgan = require("morgan");

const { listRecordsController } = require("./controller");
const { validate, errorHandler, notFoundHandler } = require("./middlewares");
const { listRecordsSchema } = require("./model");

const app = express();
app.use(express.json());
app.use(morgan("short"));
app.post("/", validate(listRecordsSchema), listRecordsController);
app.use(errorHandler);
app.use(notFoundHandler);

module.exports = app;
