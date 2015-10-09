var db = require('../db');
var _ = require('lodash');
var bluebird = require('bluebird');

module.exports = {
  messages: makeModel({
    get: ["SELECT messages.id, messages.text, messages.roomname, users.username",
          "FROM messages LEFT OUTER JOIN users ON messages.userid = users.id",
          "ORDER BY messages.id DESC;"].join(' '),
    post: ["INSERT INTO Messages(text, userid, roomname)",
           "VALUES (?, (SELECT id FROM users WHERE username = ? LIMIT 1), ?)"].join(' ')
  }),

  users: makeModel({
    get: "SELECT * FROM users",
    post: "INSERT INTO users(username) VALUES (?);"
  })
};

