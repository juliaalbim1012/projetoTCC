const jwt = require("jsonwebtoken");

module.exports = class AuthAdminMiddleware {
  static async adminAuthorization(req, res, next) {
    const { tokenAdmin } = req.cookies;

    if (!tokenAdmin) {
      res.redirect(
        "/admin?msgError= Voce preciso se autenticar para acessar o sistema!"
      );
    }

    next();
  }
};
