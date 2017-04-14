let routes = require('express').Router(),
    controlQ = require('../controllers/questionController'),
    controlA = require('../controllers/answerController'),
    auth = require('../helpers/authHelp')

//get all
routes.get('/',auth.verify,controlQ.getQuestion)

//get one
routes.get('/:id',auth.verify,controlQ.getOneQuestion)

//post new question
routes.post('/',auth.verify,controlQ.postQuestion)

//delete question
routes.delete('/:id',auth.verify,controlQ.deleteQuestion)

//post new answer
routes.put('/answers/:id',auth.verify,controlA.postAnswer)

//upvote
routes.put('/answers/upvotes/:id', auth.verify,controlA.upvoteAnswer)
routes.put('/upvotes/:id', auth.verify,controlQ.upvoteQuestion)

//downvote
routes.put('/answers/upvotes/:id',auth.verify, controlA.downvoteAnswer)
routes.put('/upvotes/:id',auth.verify, controlQ.downvoteQuestion)

//edit
routes.put('/:id',auth.verify,controlQ.editQuestion)


module.exports = routes;