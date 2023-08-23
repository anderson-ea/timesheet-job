CREATE DATABASE timesheetdb;
USE timesheetdb;

CREATE TABLE users (
  id integer PRIMARY KEY AUTO_INCREMENT,
  email VARCHAR(50) NOT NULL,
  userName VARCHAR(60) NOT NULL,
  password VARCHAR(155) NOT NULL,
  role VARCHAR(10) NOT NULL
);


CREATE TABLE workSegment (
  segmentID integer PRIMARY KEY AUTO_INCREMENT,
  userID integer,
  jobLocation VARCHAR(50) NOT NULL,
  hoursWorked integer NOT NULL,
  dateWorked VARCHAR(50) NOT NULL,
  descriptionNotes VARCHAR(300) NOT NULL,
  FOREIGN KEY (userID) REFERENCES users(id)
);

-- CREATE TABLE projects (
--   projectID integer PRIMARY KEY AUTO_INCREMENT,
--   projectName VARCHAR(50) NOT NULL,
-- )