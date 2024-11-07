const PositionModel = require("../../models/positionModel");

module.exports = class PositionController {
  static async getPosition(req, res) {
    const adminUser = req.session.adminUser;
    const results = await PositionModel.selectAllPosition();
    return res.render("position", {
      msgError: req.query.msgError,
      msgSuccess: req.query.msgSuccess,
      position: results,
      adminUser,
    });
  }

  static async postPositionPage(req, res) {
    const { position_name } = req.body;

    if (!position_name) {
      return res.redirect(
        `/pages/createPages?msgError=Não é possivel criar uma Posição em branco.
                Crie uma Posição com no mínimo 3 caracteres!`
      );
    }

    const result = await PositionModel.insertPosition(position_name);
    console.log(result);

    return res.redirect(
      "/pages/createPages?msgSuccess=Cadastro de Position realizado com sucesso."
    );
  }

  static async postPosition(req, res) {
    const { position_name } = req.body;

    if (!position_name) {
      return res.redirect(
        `/position?msgError=Nao e possivel criar uma Posição em branco.
                Crie uma Posição com no minimo 3 caracteres!`
      );
    }

    const position = {
      position_name,
    };

    const result = await PositionModel.insertPosition(position);

    return res.redirect(
      "/position?msgSuccess=Cadastrp da Position realizado com sucesso."
    );
  }

  static async getEditPosition(req, res) {
    const adminUser = req.session.adminUser;
    const getParams = req.Params.id;

    const result = await PositionModel.selectPositionById(getParams);

    return res.render("editPosition", {
      msgError: req.query.msgError,
      msgSuccess: req.query.msgSuccess,
      position: result,
      adminUser,
    });
  }

  static async putEditPosition(req, res) {
    const { position_name } = req.body;
    const getParams = req.Params.id;

    const result = await PositionModel.updatePosition(getParams, position_name);

    return res.redirect("/position?msgSuccess=Atualizado com sucesso!");
  }

  static async deletePosition(req, res) {
    const getParams = req.Params.id;

    const result = await PositionModel.deletePosition(getParams);

    return res.redirect("/position?msgSuccess=Deletado com sucesso!");
  }
};
