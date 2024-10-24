module.exports = class LogoutAdminController {
  static async logoutAdmin(req, res) {
    req.session.logged = false;
    res.clearCookie("tokenAdimin");
    res.redirect("/admin");
  }
};
