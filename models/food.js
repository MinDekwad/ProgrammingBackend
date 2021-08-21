'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Food extends Model {
    static associate(models) {
     
    }
  };
  Food.init({
    Name: DataTypes.STRING,
    Detail: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Food',
    tableName: "menu",
    //timestamps: false, => set this to false, system will not insert timestamp to database
  });
  return Food;
};