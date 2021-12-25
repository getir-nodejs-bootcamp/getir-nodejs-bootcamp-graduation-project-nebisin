const { listRecordsService } = require("./service");

module.exports.listRecordsController = (req, res, next) => {
  listRecordsService(req.data)
    .then((records) => {
      res.send({
        code: 0,
        msg: "Success",
        records: records,
      });
    })
    .catch((err) => {
      next(err);
    });
};
