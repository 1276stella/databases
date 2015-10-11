var models = require('../models');
var bluebird = require('bluebird');
var mysql = require('mysql');
var db = require('../db/index.js');



module.exports = {
  messages: {
    get: function (req, res) {
      // console.log('I get the request');
      db.Message.findAll()
        .then(function(results){
          res.json(results);
        });
    }, // a function which handles a get request for all messages
    post: function (req, res) {
      console.log('req.body: ', req.body);
      var data = {
        text: req.body.text,
        username: req.body.username,
        roomname: req.body.roomname
      };

      db.Message.create(data)
             .then(function(err, results){
              res.sendStatus(201);
             });
      // console.log('Our posted data', data);
      
    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {},
    post: function (req, res) {
      var data = req.body;
      // console.log('Our Users data', data.username);
      models.users.post(req, res, data);
      // req.on('data', function(chunk){
      //   data += chunk;
      // });
      // db.dbConnection.connect();
    }
  }
};

