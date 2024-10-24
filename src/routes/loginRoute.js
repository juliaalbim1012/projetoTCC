const express = require("express");
const LoginController = require("../controllers/loginController");

const loginRoute = express.Router();

loginRoute.get("/", LoginController.getLogin);

loginRoute.post("/", LoginController.postLogin);

module.exports = loginRoute;
