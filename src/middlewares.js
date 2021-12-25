module.exports.validate = (schema) => (req, res, next) => {
  const { value, error } = schema.validate(req.body);

  if (error) {
    const errors = error?.details?.map((detail) => {
      const { message, path } = detail;
      return { message, path };
    });
    return res.send({ code: 400, msg: "Validation failed", errors });
  }
  Object.assign(req, { data: value });
  return next();
};

module.exports.errorHandler = (err, req, res, next) => {
  const { statusCode = 500, message = "Something went wrong on our end." } =
    err;

  if (statusCode >= 500 && statusCode < 600) {
    console.error(err);

    return res.send({
      code: statusCode,
      msg: "Something went wrong on our end.",
    });
  }

  res.send({ code: statusCode, msg: message });
};

module.exports.notFoundHandler = (req, res, next) => {
  res.send({ code: 404, msg: "Not found" });
};
