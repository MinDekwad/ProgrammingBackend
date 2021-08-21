const dotenv = require('dotenv');
const path = require('path')
dotenv.config({path : path.resolve(__dirname, '../.env') })
 
module.exports = {
  "development": {
    "username": process.env.USERNAME_DB,
    "password": '',
    "database": process.env.DATABASE,
    "host": process.env.HOST,
    "dialect": process.env.DIALECT,
    "JWTKEY":process.env.JWTKEY,
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql",
    "JWTKEY":process.env.JWTKEY,
  },
  "production": {
    "username": "root",
    "password": null,
    "database": "database_production",
    "host": "127.0.0.1",
    "dialect": "mysql",
    "JWTKEY":process.env.JWTKEY,
  }
}
