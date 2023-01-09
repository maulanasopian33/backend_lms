'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class purchase_lms extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      purchase_lms.belongsTo(models.Voucher,{
        foreignKey : "voucher_code"
      });
      purchase_lms.belongsTo(models.Student,{
        foreignKey : "username"
      });
      purchase_lms.hasMany(models.Enrollment,{
        foreignKey : "purchase_id",
        onDelete : "CASCADE",
        onUpdate : "CASCADE"
      });
    }
  }
  purchase_lms.init({
    purchase_id: DataTypes.INTEGER,
    voucher_code: DataTypes.STRING,
    username: DataTypes.STRING,
    purchase_date: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'purchase_lms',
  });
  return purchase_lms;
};