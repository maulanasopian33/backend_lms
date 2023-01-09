'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class test_score extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      test_score.belongsTo(models.Test,{
        foreignKey : "test_id"
      });
      test_score.belongsTo(models.Student,{
        foreignKey : "username"
      });
    }
  }
  test_score.init({
    task_take_id: DataTypes.INTEGER,
    test_id: DataTypes.INTEGER,
    username: DataTypes.STRING,
    score: DataTypes.INTEGER,
    test_date: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'test_score',
  });
  return test_score;
};