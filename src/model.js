const Joi = require("joi");

module.exports.listRecordsSchema = Joi.object().keys({
  startDate: Joi.date().required(),
  endDate: Joi.date().greater(Joi.ref("startDate")).required(),
  minCount: Joi.number().integer().min(0).required(),
  maxCount: Joi.number()
    .integer()
    .min(0)
    .greater(Joi.ref("minCount"))
    .required(),
});
