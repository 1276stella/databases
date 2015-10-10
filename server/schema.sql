CREATE DATABASE chat;

USE chat;

CREATE TABLE messages (
  id int AUTO_INCREMENT,
  date date,
  text varchar(250),
  username varchar(50),
  roomname varchar(50),
  PRIMARY KEY (id)
);

/* Create other tables and define schemas for them here! */

CREATE TABLE users (
  id int AUTO_INCREMENT,
  username varchar(50),
  PRIMARY KEY (id)
);


/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

