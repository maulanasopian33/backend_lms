'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class purchase_dp_prakerja extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      purchase_dp_prakerja.belongsTo(models.Course,{
        foreignKey : "course_code"
      });
      purchase_dp_prakerja.belongsTo(models.Voucher,{
        foreignKey : "voucher_code"
      });
      purchase_dp_prakerja.belongsTo(models.Student,{
        foreignKey : "prakerja_name"
      });
      purchase_dp_prakerja.belongsTo(models.Digital_platform,{
        foreignKey : "platform_code"
      });
    }
  }
  purchase_dp_prakerja.init({
    invoice_code: DataTypes.STRING,
    course_code: DataTypes.STRING,
    schedule_code: DataTypes.STRING,
    voucher_code: DataTypes.STRING,
    prakerja_name: DataTypes.STRING,
    platform_code: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'purchase_dp_prakerja',
  });
  return purchase_dp_prakerja;
};