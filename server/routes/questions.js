let routes = require('express').Router(),
    controlQ = require('../controllers/questionController'),
    controlA = require('../controllers/answerController')

routes.get('/',controlQ.getQuestion)

//post new question
routes.post('/',controlQ.postQuestion)

//delete question
routes.delete('/:id',controlQ.deleteQuestion)

//post new answer
routes.put('/answers/:id',controlA.postAnswer)

//upvote
routes.put('/answers/upvotes/:id', controlA.upvoteAnswer)
routes.put('/upvotes/:id', controlQ.upvoteQuestion)

//downvote
routes.put('/answers/upvotes/:id', controlA.downvoteAnswer)
// routes.put('/upvotes/:id', controlQ.downvoteQuestion)


module.exports = routes;