const express = require("express");
const PositionController = require("../controllers/admin/positionController");

const postionRoute = express.Router();

postionRoute.get("/", PositionController.getPosition);

postionRoute.get("/editPosition/:id", PositionController.getEditPosition);

postionRoute.post("/editPosition/:id", PositionController.putPosition);

postionRoute.post("/deletePosition/:id", PositionController.deletePosition);

postionRoute.post("/position", PositionController.postPosition);

postionRoute.post("/page", PositionController.postPositionPage);

module.exports = positionRoute;
