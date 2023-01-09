'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class student extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      student.hasMany(models.Redeem_prakerja,{
        foreignKey : "username",
        onDelete : "CASCADE",
        onUpdate : "CASCADE"
      });
      student.hasMany(models.Purchase_dp_prakerja,{
        foreignKey : "prakerja_name",
        onDelete : "CASCADE",
        onUpdate : "CASCADE"
      });
      student.hasMany(models.Purchase_lms,{
        foreignKey : "username",
        onDelete : "CASCADE",
        onUpdate : "CASCADE"
      });
      student.hasMany(models.Test_score,{
        foreignKey : "username",
        onDelete : "CASCADE",
        onUpdate : "CASCADE"
      });
      student.hasMany(models.Enrollment,{
        foreignKey : "username",
        onDelete : "CASCADE",
        onUpdate : "CASCADE"
      });
    }
  }
  student.init({
    username: DataTypes.STRING,
    email: DataTypes.STRING,
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    phone: DataTypes.STRING,
    prakerja_name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'student',
  });
  return student;
};