var models = require('../models');
var bluebird = require('bluebird');
var mysql = require('mysql');
var db = require('../db/index.js');



module.exports = {
  messages: {
    get: function (req, res) {}, // a function which handles a get request for all messages
    post: function (req, res) {
      console.log("-Message-------<'))))><)");
      var data = req.body;
      console.log('Our data', data.message);
      models.messages.post(data);



    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {},
    post: function (req, res) {
      var data = req.body;
      console.log('Our data', data.username);
      models.users.post(data);
      // req.on('data', function(chunk){
      //   data += chunk;
      // });
      // db.dbConnection.connect();
    }
  }
};

