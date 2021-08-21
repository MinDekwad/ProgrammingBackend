'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Programming extends Model {
    static associate(models) {
      
    }
  };
  Programming.init({
    Name: DataTypes.STRING,
    Detail: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Programming',
    tableName: "language",
  });
  return Programming;
};