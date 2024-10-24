const express = require("express");
const ReclamacoesController = require("../controllers/reclamacoesController");

const reclamacoesRoute = express.Router();

reclamacoesRoute.get("/", ReclamacoesController.getReclamacoes);

module.exports = reclamacoesRoute;
