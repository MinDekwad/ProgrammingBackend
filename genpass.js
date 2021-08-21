const bcrypt = require('bcryptjs')

var salt = bcrypt.genSaltSync(10);
var hash = bcrypt.hashSync("oop1234", salt);
console.log(hash)