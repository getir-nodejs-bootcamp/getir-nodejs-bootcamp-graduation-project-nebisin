const run = require("./app");

const port = process.env.PORT || 3000;

run().then((app) => {
  app.listen(port, () => {
    console.log(`Listening on port ${port}`);
  });
});
