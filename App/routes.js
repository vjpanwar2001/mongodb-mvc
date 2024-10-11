let express = require("express");
const apiRouter = require("./Routes/API/apiRouter");

let mainRouter = express.Router();



mainRouter.use('/api',apiRouter);

module.exports = mainRouter ;

