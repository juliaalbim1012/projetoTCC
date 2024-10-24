const express = require("express");
const LogoutAdminController = require("../controllers/logoutAdiminController");

const logoutAdminRoute = express.Router();

logoutAdminRoute.get("/", LogoutAdminController.logoutAdmin);

module.exports = logoutAdminRoute;
