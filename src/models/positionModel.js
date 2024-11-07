const database = require("../database/database");

module.exports = class PositionModel {
  static async selectAllPosition() {
    const selectAllPosition = "SELECT * FROM position;";
    const [result] = await database.query(selectAllPosition);

    return result;
  }

  static async selectPositionById(position_id) {
    const selectAllPosition = "SELECT * FROM position WHERE position_id = ?;";
    const [[result]] = await database.query(selectAllPosition, [position_id]);

    return result;
  }

  static async insertPosition(position_name) {
    const insertPosition = `INSERT INTO position set position_name = ?;`;
    const [result] = await database.query(insertPosition, [position_name]);

    return result;
  }

  static async updatePosition(position_id, position_name) {
    const deletePosition = `UPDATE position SET position_name= ? WHERE position_id =?;`;
    const [result] = await database.query(update, [position_name, position_id]);

    return result;
  }

  static async deletePosition(position_id) {
    const deletePosition = `DELETE FROM position WHERE position_id = ?;`;
    const [result] = await database.query(deletePosition, [position_id]);

    return result;
  }
};
