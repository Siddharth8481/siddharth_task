const Users = require("../model/model.users");
const chatRoom = require("../model/model.chat_room");
const { successResponse, errorResponse } = require("../../utils/common");

const externalApiOne = async (req, res) => {
  try {
    return successResponse(
      res,
      "External api one response get sucessfully",
      []
    );
  } catch (error) {
    console.log("error", error);
    return errorResponse(res, 500, "Internal sever error");
  }
};

const externalApitwo = async (req, res) => {
  try {
    return successResponse(
      res,
      "External api two response get sucessfully",
      []
    );
  } catch (error) {
    console.log("error", error);
    return errorResponse(res, 500, "Internal sever error");
  }
};

const promiseapi = async (req, res) => {
  try {
    function fetchdata(apiendpoint) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          if (
            apiendpoint ===
              "http://192.168.1.13:4040/app/user/external_api_one" ||
            apiendpoint === "http://192.168.1.13:4040/app/user/external_api_two"
          ) {
            resolve({
              apiendpoint: apiendpoint,
              source: apiendpoint,
              data: { message: "data from api" },
            });
            // } else if (

            // ) {
            //   resolve({ source: apiendpoint, data: { message: "data from api" } });
          } else {
            reject(new error(`Error : ${enpoint}`));
          }
        });
      }, 2000);
    }
    const result = await Promise.all([
      fetchdata(`http://192.168.1.13:4040/app/user/external_api_one`),
      fetchdata(`http://192.168.1.13:4040/app/user/external_api_two`),
    ]);

    console.log("fetchdata from external_api_one ", result);
    console.log("fetchdata from external_api_two ", result);

    return successResponse(
      res,
      "External api two response get sucessfully",
      []
    );
  } catch (error) {
    console.log("error", error);
    return errorResponse(res, 500, "Internal sever error");
  }
};

const adduser = async (req, res) => {
  try {
    const { username } = req.body;

    let find_user = await Users.findOne({ username: username });

    if (find_user) {
      return errorResponse(res, 409, "this name user is already created ");
    }

    const create_user = await Users.create({ username: username });

    if (create_user) {
      return successResponse(res, "User created successfully", create_user);
    }
  } catch (error) {
    console.log("error", error);
    return errorResponse(res, 500, "Internal sever error");
  }
};

const createRoom = async (req, res) => {
  try {
    const { user_id, other_user_id } = req.body;

    let find_user_id = await Users.find({ _id: user_id }).page(page).limit(10);
  } catch (error) {
    console.log("error", error);
    return errorResponse(res, 500, "Internal sever error");
  }
};

module.exports = {
  externalApiOne,
  externalApitwo,
  promiseapi,
  adduser,
  createRoom,
};
