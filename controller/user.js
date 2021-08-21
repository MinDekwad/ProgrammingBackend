const models = require('../models/index');
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken');
const env = process.env.NODE_ENV || 'development';
const config = require('../config/config.js')[env];

exports.programLogin = async (req,res) => {
    try{
        const {user,password} = req.body;
        const Users = await models.User.findOne(
            {where : {Username:user},
        }); // Username = Username field from db, user = user from req.body
        if(Users){
            if(bcrypt.compareSync(password,Users.Password)){ // password from req.body, Password = field from db
                let jwtToken = jwt.sign(
                    {
                        user // payload คือ data ที่เอาไป encode
                    },
                    config.JWTKEY, // JWTKEY
                    {
                        expiresIn: "1h" // option
                    }
                )
                return res.status(200).json({data : Users.Username, accesstoken : jwtToken, message:'Login success'})
            }else{
                return res.status(400).json({message : "รหัสผิด"})
            }
        }else{
            return res.status(400).json({message : "ไม่มี user"})
        }
    }catch(error){
        console.log(error);
    }
}