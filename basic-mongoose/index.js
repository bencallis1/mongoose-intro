var express = require('express'),
    mongoose = require('mongoose'),
    bodyParser = require('body-parser'),
    cors = require('cors'),
    app = express();


// Controllers
var userCtrl = require('./userController');


// Add some middleware
app.use(bodyParser.json());
app.use(cors());

// Create a schema. Remember that mongo doesn't need schemas we can just throw whatever we want into it
// Mongoose is going to help us add some structure to our data
// What do we want out schema to look like "Data modeling"


// Endpoints
app.post('/users', userCtrl.create);
app.get('/users', userCtrl.read);
app.put('/users/:id', userCtrl.update);
app.delete('/users/:id', userCtrl.delete);



// Connect mongoose
var mongoUri = 'mongodb://localhost:27017/devblog';

mongoose.set('debug', true);
mongoose.connect(mongoUri);
mongoose.connection.once('open', function() {
    console.log('connected to mongoDB at: ', mongoUri);
});


app.listen(3000, function() {
    console.log('listening on port: ', 3000);
});

