const express = require("express");
const LogoutController = require("../controllers/logoutController");

const logoutRoute = express.Router();

logoutRoute.get("/", LogoutController.logout);

module.exports = logoutRoute;
