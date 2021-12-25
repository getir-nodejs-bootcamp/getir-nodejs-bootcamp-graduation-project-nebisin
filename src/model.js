const Joi = require("joi");

module.exports.listRecordsSchema = Joi.object().keys({
  startDate: Joi.date().required(),
  endDate: Joi.date().required(),
  minCount: Joi.number().integer().min(0).required(),
  maxCount: Joi.number().integer().min(0).required(),
});
