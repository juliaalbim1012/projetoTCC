const RegisterUserModel = require("../models/registerUserModels");

module.exports = class CheckFieldsMiddleware {
  static async checkFields(req, res) {
    const { ...data_user } = req.body;

    const regex_email = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const regex_senha = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$#@%*&!?])/;

    const regex_maiuscula = /^(?=.*[A-Z])/;
    const regex_minuscula = /^(?=.*[a-z])/;
    const regex_numero = /^(?=.*[0-9])/;
    const regex_caracter_especial = /^(?=.[$#@%&!?])/;
    if (
      !data_user.user_name ||
      !data_user.user_email ||
      !data_user.user_password ||
      !data_user.userConfirmPassword
    ) {
      req.message = {
        msgFieldsEmpty: "Os campos não podem ser vazios!",
      };

      return res.render("register", {
        msg: req.message,
      });
    }

    if (data_user.user_name.length < 3) {
      req.message = {
        msgNameError: "Nome precisa ter o minimo de 3 caracteres!",
      };
      console.log(req);
      return res.render("register", {
        msg: req.message,
      });
    }

    if (!regex_email.test(data_user.user_email)) {
      req.message = {
        msgEmailError: "digite um email valido!",
      };
      console.log(req.message);
      return res.render("register", {
        msg: req.message,
      });
    }

    if (data_user.user_password !== data_user.userConfirmPassword) {
      req.message = {
        msgPassError: "Senhas nao sao iguais",
      };
      console.log(req.message);
      return res.render("register", {
        msg: req.message,
      });
    }

    const recebeEmailFromModel = await RegisterUserModel.getUserByEmail(
      data_user.user_email
    );

    console.log("Estamos na Controller");
    console.log(recebeEmailFromModel);
  }
};
