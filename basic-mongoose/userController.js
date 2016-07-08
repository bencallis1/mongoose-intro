var User = require('./userModel'),
    mongoose = require('mongoose');



/// Now lets use module.exports to export an object with our CRUD methods

module.exports = {
    create: function(req, res) {
        var newUser  = new User(req.body);
        newUser.save(function(err, result) {
            if (err) return res.status(500).send(err);
            else res.send(result);
        });
    },

    read: function(req, res) {
        var query = {};
        if(req.query.name) query.username = new RegExp(req.query.name);
        if(req.query.id) query._id = req.query.id;
        User.find(query).exec(function(err,result) {
            if(err) return res.status(500).send(err);
            else res.send(result)
        })
    },

    update: function(req, res) {
        User.findByIdAndUpdate(req.params.id, req.body, function(err, result) {
            if (err) return res.status(500).send(err);
            else res.send(result);
        });
    },

    delete: function(req, res) {
        User.findByIdAndRemove(req.params.id, function(err, result) {
            if (err) return res.status(500).send(err);
            else res.send(result);
        });
    }
};