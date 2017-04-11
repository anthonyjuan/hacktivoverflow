let question = require('../models/question'),
    answ = require('../models/answer'),
    user = require('../models/user')

module.exports = {
  getQuestion: function(req, res) {
    question.find(function(err,results) {
      if(!err) {
        res.send(results)
      } else {
        res.send(err)
      }
    })
  },
  postQuestion: function(req, res){
    let newQuestion = new question({
      user: req.body.user,
      title: req.body.title,
      content: req.body.content
    })
    newQuestion.save(function(err,result) {
      if(!err) {
        user.findByIdAndUpdate(result.user, {
          $push: {
            questions: result._id
          }
        }, {'new': true}, function(err){
          if(!err) {
            res.send('update berhasil')
          } else {
            res.send(err)
          }
        })

      } else {
        res.send(err)
      }
    })
  },
  deleteQuestion: function(req, res) {
    question.findByIdAndRemove(req.params.id, function(err){
      if(!err) {
        res.send('Delete Sukses!')
      } else {
        res.send(err)
      }
    })
  },
  upvoteQuestion: function(req, res) {
    question.findOne({
      '_id': req.params.id
    }, function(err, result) {
      if (!err) {

        let statusAda = result.upVotes.some(x => x == req.body.user)
        if(statusAda) {
          res.send('user sudah pernah vote')
        } else {
          question.findOneAndUpdate({
            '_id': req.params.id
          },{
            '$push':{
              'upVotes': req.body.user
            }
          },function(err){
            if(!err){
              res.send('upvote berhasil!');
            } else {
              res.send(err);
            }
          })
        }
      } else {
        res.send(err)
      }
    })
  }

};