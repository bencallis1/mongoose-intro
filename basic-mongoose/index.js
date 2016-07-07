var express = require('express'),
    mongoose = require('mongoose'),
    bodyParser = require('body-parser'),
    cors = require('cors'),
    app = express();


// Add Controllers



// Add some middleware
app.use(bodyParser.json());
app.use(cors());


// Add  Endpoints




// Mongo URi
var mongoUri = 'mongodb://localhost:27017/devblog';

// Connect mongoose


app.listen(3000, function() {
    console.log('listening on port: ', 3000);
});

