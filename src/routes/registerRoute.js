const express = require("express");
const RegisterController = require("../controllers/registerController");
const RegisterUserMiddleware = require("../middlewares/registerUserMiddleware");

const RegisterRoute = express.Router();

RegisterRoute.get("/", RegisterController.getRegister);

RegisterRoute.post("/", RegisterUserMiddleware.verifyFields, RegisterController.postRegister);

module.exports = RegisterRoute;
