const express = require("express");
const router = express.Router();

let multipart = require("connect-multiparty");
let multipartMiddleware = multipart();

const {
  externalApiOne,
  externalApitwo,
  promiseapi,
  adduser,
} = require("../controller/user.controller");
router.get("/external_api_one", externalApiOne);
router.get("/external_api_two", externalApitwo);
router.get("/promise_api", promiseapi);
router.post("/add_user", multipartMiddleware, adduser);
module.exports = router;
