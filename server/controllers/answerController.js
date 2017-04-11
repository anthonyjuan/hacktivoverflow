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
        let statusAda = result.answers[0].upVotes.some(x => x == req.body.user)
        if(statusAda) {
          res.send('user sudah pernah vote')
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
  },
  downvoteAnswer: function(req, res) {
    question.findOne({
      '_id': req.params.id,
      'answers._id': req.body.answer
    },{'answers.$': 1}, function(err, result) {
      if (!err) {

        let statusAda = result.answers[0].downVotes.some(x => x == req.body.user)

        if(statusAda) {
          res.send('user sudah pernah vote')
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
              res.send('upvote berhasil!');
            } else {
              res.send(err);
            }
          })
        }
        // res.send(result.answers)
      } else {
        res.send(err)
      }
    })
    // question.findOneAndUpdate({
    //   '_id': req.params.id,
    //   'answers._id' : req.body.answer
    // },{
    //   '$push':{
    //     'answers.$.downVotes': req.body.user
    //   }
    // },function(err){
    //   if(!err){
    //     res.send('upvote berhasil!');
    //   } else {
    //     res.send(err);
    //   }
    // })
  }
};