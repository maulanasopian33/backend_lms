'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class test extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      test.belongsTo(models.Course,{
        foreignKey : "course_id"
      });
      test.hasMany(models.Test_score,{
        foreignKey : "test_id",
        onDelete : "CASCADE",
        onUpdate : "CASCADE"
      });
    }
  }
  test.init({
    test_id: DataTypes.INTEGER,
    course_id: DataTypes.STRING,
    test_type: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'test',
  });
  return test;
};