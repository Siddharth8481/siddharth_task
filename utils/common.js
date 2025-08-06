const successResponse = (res, message = "Operation successful", data) => {
  res.status(200).json({
    success: true,
    message,
    data: [],
  });
};

const errorResponse = (res, statusCode, message, error = null) => {
  res.status(statusCode).json({
    success: false,
    message,
    error: error ? error.message : null, // Include error details if available
  });
};

module.exports = { successResponse, errorResponse };
