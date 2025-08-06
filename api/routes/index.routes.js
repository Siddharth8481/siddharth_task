const express = require("express");
const router = express.Router();

const user_route = require("./user.routes");

router.use("/user", user_route);
module.exports = router;
