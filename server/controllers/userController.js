var User = require('../models/user'),
    pwh = require('password-hash')


module.exports = {
  getUser: function(req, res) {
    User.find(function(err,results) {
      if(!err) {
        res.send(results)
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