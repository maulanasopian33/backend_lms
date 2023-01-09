'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class voucher extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      voucher.belongsTo(models.Course,{
        foreignKey : "course_id"
      });
      voucher.hasMany(models.Purchase_dp_prakerja,{
        foreignKey : "voucher_code",
        onDelete : "CASCADE",
        onUpdate : "CASCADE"
      });
      voucher.hasMany(models.Purchase_lms,{
        foreignKey : "voucher_code",
        onDelete : "CASCADE",
        onUpdate : "CASCADE"
      });
      // define association here
    }
  }
  voucher.init({
    voucher_code: DataTypes.STRING,
    course_id: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'voucher',
  });
  return voucher;
};