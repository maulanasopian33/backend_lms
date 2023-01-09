'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class enrollment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      enrollment.belongsTo(models.Purchase_lms,{
        foreignKey : "purchase_id"
      });
      enrollment.belongsTo(models.Student,{
        foreignKey : "username"
      });
      enrollment.belongsTo(models.Course,{
        foreignKey : "course_id"
      });
    }
  }
  enrollment.init({
    enrollment_id: DataTypes.INTEGER,
    purchase_id: DataTypes.INTEGER,
    username: DataTypes.STRING,
    course_id: DataTypes.STRING,
    ennroll_date: DataTypes.DATE,
    complate_date: DataTypes.DATE,
    certificate_url: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'enrollment',
  });
  return enrollment;
};