let question = require('../models/question'),
    answ = require('../models/answer')

module.exports = {
  postAnswer: function(req, res) {
    question.findByIdAndUpdate(req.params.id, {
      $push: {
        answers: req.body
      }
    }, {'new': true},function(err) {
      if (!err) {
        res.send('answer berhasil di post')
      } else {
        res.send(err);
      }
    })
  },
  upvoteAnswer: function(req, res) {
    question.findOne({
      '_id': req.params.id,
      'answers._id': req.body.answer
    },{'answers.$': 1}, function(err, result) {
      if (!err) {
        // res.send(result)
        let statusAdaDiUpVotes = result.answers[0].upVotes.some(x => x == req.body.user)
        let statusAdaDiDownVotes = result.answers[0].downVotes.some(x => x == req.body.user)
        if(statusAdaDiUpVotes) {
          res.send('user sudah pernah vote')
        } else {
          if(statusAdaDiDownVotes) {
            question.update({
              '_id': req.params.id,
              'answers._id' : req.body.answer
            },{
              '$pullAll':{
                'answers.$.downVotes': [req.body.user]
              }
            },function(err){
              if(!err){
                question.findOneAndUpdate({
                  '_id': req.params.id,
                  'answers._id' : req.body.answer
                },{
                  '$push':{
                    'answers.$.upVotes': req.body.user
                  }
                },function(err){
                  if(!err){
                    res.send({succes: true, msg:'upvote berhasil!'});
                  } else {
                    res.send({succes: false, msg:err});
                  }
                })
              } else {
                res.send({succes: false, msg:err});
              }
            })

          } else {
            question.findOneAndUpdate({
              '_id': req.params.id,
              'answers._id' : req.body.answer
            },{
              '$push':{
                'answers.$.upVotes': req.body.user
              }
            },function(err){
              if(!err){
                res.send({succes: true, msg:'upvote berhasil!'});
              } else {
                res.send({succes: false, msg:err});
              }
            })
          }
        }
      } else {
        res.send({succes: false, msg:err})
      }
    })
  },
  downvoteAnswer: function(req, res) {
    question.findOne({
      '_id': req.params.id,
      'answers._id': req.body.answer
    },{'answers.$': 1}, function(err, result) {
      if (!err) {

        let statusAdaDiUpVotes = result.answers[0].upVotes.some(x => x == req.body.user)
        let statusAdaDiDownVotes = result.answers[0].downVotes.some(x => x == req.body.user)

        if(statusAdaDiDownVotes) {
          res.send('user sudah pernah vote')
        } else {
          if(statusAdaDiUpVotes) {
            question.update({
              '_id': req.params.id,
              'answers._id' : req.body.answer
            },{
              '$pullAll':{
                'answers.$.upVotes': [req.body.user]
              }
            },function(err){
              if(!err){
                question.findOneAndUpdate({
                  '_id': req.params.id,
                  'answers._id' : req.body.answer
                },{
                  '$push':{
                    'answers.$.downVotes': req.body.user
                  }
                },function(err){
                  if(!err){
                    res.send({succes: true, msg:'downvote berhasil!'});
                  } else {
                    res.send({succes: false, msg:err});
                  }
                })
              } else {
                res.send({succes: false, msg:err});
              }
            })
          } else {
            question.findOneAndUpdate({
              '_id': req.params.id,
              'answers._id' : req.body.answer
            },{
              '$push':{
                'answers.$.downVotes': req.body.user
              }
            },function(err){
              if(!err){
                res.send({succes: true, msg:'downvote berhasil!'});
              } else {
                res.send({succes: false, msg:err});
              }
            })
          }

        }

      } else {
        res.send(err)
      }
    })
  },
  deleteAnswer: function(req, res) {

  }
};