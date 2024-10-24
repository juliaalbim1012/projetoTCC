const bcrypt = require("bcryptjs");
const RegisterUserModel = require("../models/registerUserModels");

class RegisterController {
  static async getRegister(req, res) {
    return res.render("register", {
      msgErrorName: req.query.msgErrorName,
      msgErrorCPF: req.query.msgErrorCPF,
      msgErrorCEP: req.query.msgErrorCEP,
      msgErrorTelefone: req.query.msgErrorTelefone,
      msgErrorEmail: req.query.msgErrorEmail,
      msgErrorPass: req.query.msgErrorName,
      msgErrorFieldsEmpty: req.query.msgErrorFieldsEmpty,
      msgSucess: req.query.msgErrorSucess,
    });
  }

  static async postRegister(req, res) {
    const { ...data_user } = req.body;
    console.log(data_user);

    const regex_email = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const regex_senha = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$#@%*&!?])/;

    if (
      !data_user.user_name ||
      !data_user.user_email ||
      !data_user.user_password ||
      !data_user.user_ConfirmPassword
    ) {
      return res.redirect(
        "/register?msgErrorFieldsEmpty=Os campos não podem estar vazios!"
      );
    }

    if (data_user.user_name.lenght < 3) {
      return res.redirect(
        "/register?msgErrorName=Nome precisa ter o mínimo de 3 caracteres!"
      );
    }

    if (!regex_email.test(data_user.user_email)) {
      return res.redirect("/register?msgErrorEmail=Digite um email válido!");
    }

    if (!regex_senha.test(data_user.user_password)) {
      return res.redirect(
        "/register?msgErrorPass=Senhas precisam ter letras maiusculas, minusculas, numeros e caracteres!"
      );
    }

    if (data_user.user_password !== data_user.userConfirmPassword) {
      return res.redirect("/register?msgErrorPass=Senhas não são iguais!");
    }

    const receiveEmailFromModel = await RegisterUserModel.getUserByEmail(
      data_user.user_email
    );

    if (receiveEmailFromModel) {
      return res.redirect(
        "/register?msgErrorEmail=Email já existe no sistema!"
      );
    }

    const passwordHashed = await bcript.hash(data_user.user_password, 10);

    const dataUser = {
      user_name: data_user.user_name,
      user_cpf: data_user.user_cpf,
      user_cep: data_user.user_cep,
      user_telefone: data_user.user_telefone,
      user_email: data_user.user_email,
      user_password: passwordHashed,
    };

    const result = await RegisterUserModel.inserUser(dataUser);

    console.log(result);

    return res.redirect("/login?msgSucess=Cadastro realizado com sucesso!");
  }
}
module.exports = RegisterController;
