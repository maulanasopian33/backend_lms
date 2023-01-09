'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class course_category extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      course_category.hasMany(models.Course,{
        foreignKey : "category_code",
        onDelete : 'cascade'
      });
    }
  }
  course_category.init({
    category_code: DataTypes.STRING,
    category_name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'course_category',
  });
  return course_category;
};