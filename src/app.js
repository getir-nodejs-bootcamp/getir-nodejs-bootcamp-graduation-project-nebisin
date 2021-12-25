require("dotenv").config();
require("./loader")();

const express = require("express");

const { listRecordsController } = require("./controller");
const { validate, errorHandler } = require("./middlewares");
const { listRecordsSchema } = require("./model");

const port = process.env.PORT || 3000;

const app = express();
app.use(express.json());
app.post("/", validate(listRecordsSchema), listRecordsController);
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
