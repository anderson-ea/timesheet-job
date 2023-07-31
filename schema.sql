CREATE DATABASE timesheetdb;
USE timesheetdb;

CREATE TABLE users (
  id integer PRIMARY KEY AUTO_INCREMENT,
  email VARCHAR(50) NOT NULL,
  userName VARCHAR(60) NOT NULL,
  password VARCHAR(155) NOT NULL
);

CREATE TABLE timesheet (
  id integer PRIMARY KEY AUTO_INCREMENT,
  project VARCHAR(50) NOT NULL,
  userID integer FOREIGN KEY,

)