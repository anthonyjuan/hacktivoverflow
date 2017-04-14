var User = require('../models/user'),
    pwh = require('password-hash'),
    jwt = require('jsonwebtoken')

require('dotenv').config()
module.exports = {
  getUser: function(req, res) {
    User.find(function(err,results) {
      if(!err) {
        res.send(results)
      }
    })
  },
  login: function(req, res) {
    User.findOne({username:req.body.username}, function(err,data) {
      if(err || data == null ) {
        res.send({success:false, msg:err})
      } else {
        if(pwh.verify(req.body.password,data.password)) {
          let token = jwt.sign({username: data.username}, process.env.SECRET_KEY)
          res.send(token)
        } else {
          res.send('Wrong Password')
        }
      }
    })
  },
  postUser: function(req, res) {
    let newUser = new User({
      username: req.body.username,
      password: pwh.generate(req.body.password)
    })

    newUser.save(function(err) {
      if(!err) {
        res.send('User baru telah dibuat')
      } else {
        res.send(err)
      }
    })
  }
};