'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class digital_platform extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      digital_platform.hasMany(models.Purchase_dp_platform,{
        foreignKey : "platform_code",
        onDelete : "CASCADE",
        onUpdate : "CASCADE"
      });
    }
  }
  digital_platform.init({
    platform_code: DataTypes.STRING,
    platform_name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'digital_platform',
  });
  return digital_platform;
};