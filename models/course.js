'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class course extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      course.belongsTo(models.Course_category,{
        foreignKey :  "category_code",
      });
      course.hasMany(models.Test,{
        foreignKey : "course_id",
        onDelete : "CASCADE",
        onUpdate : "CASCADE"
      });
      course.hasMany(models.Redeem_prakerja,{
        foreignKey : "course_id",
        onDelete : "CASCADE",
        onUpdate : "CASCADE"
      });
      course.hasMany(models.Voucher,{
        foreignKey : "course_id",
        onDelete : "CASCADE",
        onUpdate : "CASCADE"
      });
      course.hasMany(models.Purchase_dp_prakerja,{
        foreignKey : "course_code",
        onDelete : "CASCADE",
        onUpdate : "CASCADE"
      });
      course.hasMany(models.Enrollment,{
        foreignKey : "course_id",
        onDelete : "CASCADE",
        onUpdate : "CASCADE"
      });
    }
  }
  course.init({
    course_id: DataTypes.STRING,
    course_code: DataTypes.STRING,
    schedule_code: DataTypes.STRING,
    course_name: DataTypes.STRING,
    course_url: DataTypes.STRING,
    course_price:DataTypes.INTEGER,
    category_code:DataTypes.STRING,
    schedule_start_date:DataTypes.DATE,
    schedule_end_date:DataTypes.DATE
  }, {
    sequelize,
    modelName: 'course',
  });
  return course;
};