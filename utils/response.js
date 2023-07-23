const successResponse = (data, statusCode) => {
  return {
    statusCode,
    body: JSON.stringify(data),
  };
};

const errorResponse = (message, statusCode, error = false) => {
  return {
    statusCode,
    body: JSON.stringify({message}),
  };
};

module.exports = {
  successResponse,
  errorResponse
}
