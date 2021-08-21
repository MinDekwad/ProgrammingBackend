const jwt = require('jsonwebtoken');
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.js')[env];
module.exports = (req, res, next) => {
    try {
      const authHeader = req.headers.authorization;
      if (!authHeader) {
        res.status(404).json({
          error: {
            message: "ไม่พบ token",
          },
        });
      }
 
     const token = authHeader.split(' ')[1];
     jwt.verify(token, config.JWTKEY);
      next();
    } catch (error) {
      res.status(404).json({
        error: {
          message: "token ไม่ถูกต้อง",
        },
      });
    }
  };