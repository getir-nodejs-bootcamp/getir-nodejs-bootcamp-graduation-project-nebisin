const mongo = require("./mongo");

module.exports.listRecordsController = (req, res, next) => {
  const { startDate, endDate, minCount, maxCount } = req.body;

  const projectStage = {
    $project: {
      key: "$key",
      createdAt: "$createdAt",
      totalCount: {
        $sum: "$counts",
      },
    },
  };

  const matchStage = {
    $match: {
      createdAt: {
        $gte: new Date(startDate),
        $lte: new Date(endDate),
      },
      totalCount: {
        $gt: minCount,
        $lt: maxCount,
      },
    },
  };

  mongo.Records.aggregate([projectStage, matchStage]).toArray((err, docs) => {
    if (err) {
      return next(err);
    }

    res.send({
      code: 0,
      msg: "Success",
      records: docs.map((doc) => {
        return {
          key: doc.key,
          totalCount: doc.totalCount,
          createdAt: doc.createdAt,
        };
      }),
    });
  });
};
