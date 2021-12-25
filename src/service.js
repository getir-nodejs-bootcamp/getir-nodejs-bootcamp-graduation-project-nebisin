const mongo = require("./mongo");

module.exports.listRecordsService = (data) => {
  const { startDate, endDate, minCount, maxCount } = data;

  return new Promise((resolve, reject) => {
    const projectStage = {
      $project: {
        key: "$key",
        createdAt: "$createdAt",
        totalCount: {
          $sum: "$counts",
        },
      },
    };

    // "MongoDB moves any filters in the $match stage that do not require
    // values computed in the projection stage to a new $match stage
    // before the projection."
    // https://docs.mongodb.com/manual/core/aggregation-pipeline-optimization/
    // So we don't need to create two separate stages for performance reasons.
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
        return reject(err);
      }

      const records = docs.map((doc) => {
        return {
          key: doc.key,
          totalCount: doc.totalCount,
          createdAt: doc.createdAt,
        };
      });

      resolve(records);
    });
  });
};
