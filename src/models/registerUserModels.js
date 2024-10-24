const database = require("../database/database");

module.exports = class RegisterUserModel {
  static async getUserByEmail(getEmailFromUserController) {
    const selectEmail = "SELECT * FROM users WHERE user_email = ?";
    const [[result]] = await database.query(selectEmail, [
      getEmailFromUserController,
    ]);

    return result;
  }
  static async getAllUser() {
    const selectAllUsers = "SELECT * FROM users";
    const [result] = await database.query(selectAllUsers);

    return result;
  }

  static async insertUser(data_user) {
    const {
      user_name,
      user_cpf,
      user_cep,
      user_telefone,
      user_email,
      user_password,
    } = data_user;
    const inserUser =
      "INSERT INTO users(user_name, user_cpf, user_cep, user_telefone, user_email, user_password) VALUES (?, ?, ?, ?, ?, ?)";
    const [result] = await database.query(insertUser, {
      user_name,
      user_cpf,
      user_cep,
      user_telefone,
      user_email,
      user_password,
    });

    return result;
  }
};
