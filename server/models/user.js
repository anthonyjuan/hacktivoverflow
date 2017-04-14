let monggo = require('mongoose'),
    Schema = monggo.Schema;

let userSchema = new Schema({
  username: {type:String, required:true, unique: true},
  password: {type:String, required:true},
  token: [{type:String}]
})

let User = monggo.model('User', userSchema)

module.exports = User;