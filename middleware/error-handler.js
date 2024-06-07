const { StatusCodes } = require("http-status-codes");

const errorHandlerMiddleware = (err, req, res, next) => {
  try {
    let customError = {
      statusCode: err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR, // 500
      msg: err.message || "Something went wrong, please try again!",
    };

    return res.status(customError.statusCode).json({ msg: customError.msg });
  } catch (error) {
    console.log(error);
  }
};

module.exports = errorHandlerMiddleware;
