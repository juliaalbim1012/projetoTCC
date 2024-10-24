class DashboardController {
  static async getDashboard(req, res) {
    const msgSuccess = req.query.msgSuccess;
    const adminUser = req.session.adminUser;
    return res.render("dashboard", {
      msgSuccess,
      adminUser,
    });
  }
}

module.exports = DashboardController;
