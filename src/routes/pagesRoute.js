const express = require("express");
const PagesController = require("../controllers/admin/pagesController");

const pagesRoute = express.Router();

pagesRoute.get("/", PagesController.getPages);

pagesRoute.get("/createPages", PagesController.getCreatePages);

pagesRoute.post("/createPages", PagesController.postCreatePages);

pagesRoute.get("/editPage/:id", PagesController.getEditPage);

pagesRoute.post("/updatePage/:id", PagesController.putEditPage);

pagesRoute.post("/deletePage/:id", PagesController.deletePage);

module.exports = pagesRoute;
