var express = require('express'),
    mongoose = require('mongoose'),
    bodyParser = require('body-parser'),
    cors = require('cors'),
    app = express();


// Controllers
// We will need to add a refrence to our userCtrl

var userCtrl = require('./userController');


// Middleware
app.use(bodyParser.json());
app.use(cors());




// Add Endpoints and mount controller to them

app.post('/users', userCtrl.create);
app.get('/users', userCtrl.read);
app.put('/users/:id', userCtrl.update);
app.delete('/users/:id', userCtrl.delete);

// Create gt that returns all users



// Connect mongoose

var mongoUri = 'mongodb://localhost:27017/devblog';

mongoose.set('debug', true);

// The connection happens here
mongoose.connect(mongoUri);

mongoose.connection.once('open', function() {
    console.log('connected to mongoDB at: ', mongoUri);
});


app.listen(3000, function() {
    console.log('listening on port: ', 3000);
});

