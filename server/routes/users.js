let routes = require('express').Router(),
    control = require('../controllers/userController'),
    controlQ = require('../controllers/questionController')

//get user
routes.get('/', control.getUser)
routes.get('/:id', control.getOneUser)

//getQuestion by id user
routes.get('/:iduser/panel', controlQ.getAllQuestionByUserId)
//post user
routes.post('/', control.postUser)

module.exports = routes;