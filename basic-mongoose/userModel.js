var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// The object here is our blueprint for our data model
// Whatever is inside this object will be available for us when creating these documents

// Blueprint
var UserSchema = new Schema({
    newUser: Boolean,
    // Even though this looks like an object it's actually just a string because we set the type to string
    username: {
        type: String,
        // we can add validations too
        // just use an object literal here instead
        // just be sure to have a type property on that object
        // to tell mongoose what type this property will be
        unique: true,  // We can add validations to our object also
        required: true

    },

    // Address is a object with a state and city property that are strings.
    address: {
        state: { // This is basically like making a state Schema so it would probably be better to make one then import it
            type: String,
            required: true
        },
        city:  {
            type:String,
            required:true
        },
        zip: {
            type: Number,
            required: true
        },
        street: {
            type: String,
            required: true
        }
    }
});

// no matter what we pass in as a name for the model,
// mongoose will lowercase it and pluralize it for the collection.
// so below the name for the model is 'User', mongoose will
// convert that to 'users' in the database.
// UserModel is the model we'll use in node to CRUD so
// it makes sense to export this;


// The first argument is the collection we want to make.

// The second argument is the blueprint we want to use.

module.exports = mongoose.model('User', UserSchema);