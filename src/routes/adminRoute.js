const express = require("express");
const AdminCotroller = require("../controllers/admin/adminController");

const adminRoute = express.Router();

adminRoute.get("/", AdminCotroller.getAdmin);

adminRoute.post("/", AdminCotroller.postAdmin);

module.exports = adminRoute;
