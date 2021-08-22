'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    
    static associate(models) {
      
    }
  };
  User.init({
    Username: DataTypes.STRING,
    Password: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
    tableName: "user",
  });
  return User;
};