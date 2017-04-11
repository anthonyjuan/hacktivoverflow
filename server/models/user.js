let monggo = require('mongoose'),
    Schema = monggo.Schema;

let userSchema = new Schema({
  username: {type:String, required:true},
  password: {type:String, required:true},
  comments: [{type:Schema.Types.ObjectId, ref:"Comment"}],
  questions: [{type:Schema.Types.ObjectId, ref:"Question"}],
  token: [{type:String}]
})

let User = monggo.model('User', userSchema)

module.exports = User;