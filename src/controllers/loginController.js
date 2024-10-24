const RegisterUserModel = require("../models/registerUserModels");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

class LoginController {
  static async getLogin(req, res) {
    return res.render("login");
  }

  static async postLogin(req, res) {
    const { user_email, user_password } = req.body;
    const resultDB = await RegisterUserModel.getUserByEmail(user_email);
    if (!user_email || !user_password) {
      return res.redirect("/login?msgError=Campos não podem ser vazios!");
    }

    if (!resultDB) {
      return res.redirect("/login?msgError=Email não encontrado!");
    }

    const verifyPassword = await bcrypt.compare(
      user_password,
      resultDB.user_password
    );
    console.log(verifyPassword);

    req.session.logged = true;

    return res.redirect("reclamacoes");
  }
}

module.exports = LoginController;
