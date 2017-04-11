let express = require('express'),
    index = require('./routes/index'),
    users = require('./routes/users'),
    questions = require('./routes/questions'),
    monggo = require('mongoose'),
    bodyPars = require('body-parser'),
    app = express()



app.use(bodyPars.json())
app.use(bodyPars.urlencoded({extended:false}))

app.use('/',index);
app.use('/users',users);
app.use('/questions',questions);

monggo.connect('mongodb://localhost/hackoverflow')
monggo.connection.on('connected', function() {
  console.log('mongo connected');
})
app.listen(3000, function() {
  console.log('server is running...');
})