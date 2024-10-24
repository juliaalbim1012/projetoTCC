const jwt = require("jsonwebtoken");
const adminModel = require("../../models/adminModel");

class AdminCotroller {
  static async getAdmin(req, res) {
    const msgSuccess = req.query.msgSuccess;
    const msgError = req.query.msgError;

    return res.render("admin", {
      msgSuccess,
      msgError,
    });
  }

  static async postAdmin(req, res) {
    const { admin_email, admin_password } = req.body;
    const result = await adminModel.selectAdminByEmail(admin_email);
    console.log(result);

    if (!admin_email || !admin_password) {
      return res.redirect("/admin?msgError= Campos precisam preenchidos!");
    }

    if (!result) {
      return res.redirect(
        "/admin?msgError= Esse Email não esta cadastrado, por gentileza procurar o admin do sistema!"
      );
    }
    if (admin_password !== result.admin_password) {
      return res.redirect("/admin?msgError=A senha não são iguais");
    }

    const tokenAdmin = jwt.sign(
      { admin_id: result.admin_id },
      process.env.SECRET,
      {
        expiresIn: 60 * 60 * 1000,
      }
    );

    res.cookie("tokenAdmin", tokenAdmin, {
      maxAge: 60 * 60 * 1000,
      httpOnly: true,
    });

    req.session.logged = true;
    req.session.adminUser = result;

    return res.redirect("/dashboard?msgSuccess=Login realizado com sucesso!");
  }
}

module.exports = AdminCotroller;
