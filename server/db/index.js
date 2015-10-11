var Sequelize = require('sequelize');
var sequelize = new Sequelize("chat", "root", "", {
  define: {
    freezeTableName: true
  }
});

var User = sequelize.define('user', {
  id: {type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true},
  username: Sequelize.STRING,


});

var Message = sequelize.define('message', {
  id: {type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true},
  username: Sequelize.STRING,
  text: Sequelize.STRING,
  roomname: Sequelize.STRING
});

User.sync();
Message.sync()

// .then(function(){
//   var newUser = Message.build({text: "Jean Valjean"});
//   newUser.save();
// });

 

exports.User = User;
exports.Message = Message; 


