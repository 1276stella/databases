var db = require('../db');




module.exports = {
  messages: {
    get: function (req, res) {
      // db.dbConnection.connect();
      // var myQuery = 'SELECT * FROM messages;';
      // db.dbConnection.query(myQuery, function(err, results){
      //   // db.dbConnection.end();
      //   if(err) {
      //     console.log("Error message: ", err.message);
      //     res.send(err.message);
      //   } else {
      //     console.log('Success mysql Messages ', results);
      //     res.send(results);
      //   }
      // });

    }, // a function which produces all the messages
    post: function (req, res, data) {

      // db.dbConnection.connect();
      // console.log('Posted data in models: ', data);
      // var myQuery = 'INSERT INTO messages (username,text,roomname) values ("' + data.username + '", "'+ data.text +'", "'+ data.roomname +'");';
      // // var myQuery = "INSERT INTO users (username) values ('puppy');";
      // db.dbConnection.query(myQuery, function(err, results){
      //   // db.dbConnection.end();
      //   if(err) {
      //     console.log(err.message);
      //     res.send(err.message);
      //   } else {
      //     console.log('Success mysql Messages');
      //     res.send('Success messages');
      //   }
      // });

    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function () {},
    post: function (req, res, data) {
      // db.dbConnection.connect();
      var myQuery = "INSERT INTO users (username) values ('" + data.username + "');";
      // var myQuery = "INSERT INTO users (username) values ('puppy');";
      db.dbConnection.query(myQuery, function(err, results){
        // db.dbConnection.end();
        if(err) {
          res.send(err.message);
        } else {
          console.log('Success mysql Users');
          res.send('Success users');
        }
      });
    }
  }
};

