require("dotenv").config();
const app = require("./app");
const loader = require("./loader");

const port = process.env.PORT || 3000;

loader().then(() => {
  app.listen(port, () => {
    console.log(`Listening on port ${port}`);
  });
});
