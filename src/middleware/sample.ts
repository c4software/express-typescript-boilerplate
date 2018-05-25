import settings from "../settings";

/**
 * Sample Middleware
 * @param req
 * @param res
 * @param next
 */

const sampleMiddleware = function (req, res, next) {
  console.log("Sample Middleware");
  next();
};

export default sampleMiddleware;