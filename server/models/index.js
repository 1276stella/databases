var db = require('../db');




module.exports = {
  messages: {
    get: function () {}, // a function which produces all the messages
    post: function () {

      db.dbConnection.connect();
      var myQuery = 'INSERT INTO messages (username,text,roomname) values (' + JSON.stringify(data.username) + ', '+ JSON.stringify(data.message) +', '+ JSON.stringify(data.roomname) +');';
      // var myQuery = "INSERT INTO users (username) values ('puppy');";
      db.dbConnection.query(myQuery, function(err, results){
        // db.dbConnection.end();
        if(err) {
          console.log(err.message);
        } else {
          console.log('Success messages');
        }
      });

    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function () {},
    post: function (data) {
      db.dbConnection.connect();
      var myQuery = 'INSERT INTO users (username) values (' + JSON.stringify(data.username) + ');';
      // var myQuery = "INSERT INTO users (username) values ('puppy');";
      db.dbConnection.query(myQuery, function(err, results){
        // db.dbConnection.end();
        if(err) {
          console.log(err.message);
        } else {
          console.log('Success users');
        }
      });
      // console.log("I am after post");
    }
  }
};

