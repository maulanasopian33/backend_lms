'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class redeem_prakerja extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      redeem_prakerja.belongsTo(models.Student,{
        foreignKey : "username"
      });
      redeem_prakerja.belongsTo(models.Course,{
        foreignKey : "course_id"
      });
    }
  }
  redeem_prakerja.init({
    redeem_code: DataTypes.STRING,
    username: DataTypes.STRING,
    redeem_date: DataTypes.DATE,
    course_id: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'redeem_prakerja',
  });
  return redeem_prakerja;
};