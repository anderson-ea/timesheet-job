const express = require('express')
const app = express()
const mysql = require('mysql')
const cors = require('cors')

const bcrypt = require('bcrypt')
// require('dotenv').config()
// const USER = process.env.USER
// const HOST = process.env.HOST
// const PASS = process.env.PASSWORD
// const DB = process.env.DB

app.use(express.json())
app.use(cors())

app.listen(3002, () => {
  console.log("Connected to backend! Port 3002")
})

//create database connection
const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "LoLmachines1!",
  database: "timesheetdb",
  multipleStatements: true
})


app.post('/register', (req, res) => {
  //get values from register page
  const sentEmail = req.body.Email
  const sentUserName = req.body.UserName
  const sentPassword = req.body.Password
  
  //create SQL statement to insert user to db table Users
  const SQL = 'INSERT INTO users (email, username, password) VALUES (?,?,?)'
  
  //SQL statement to check if user already exists
  const sqlGet = `SELECT * FROM users WHERE email = ?`;
  bcrypt.hash(sentPassword, 10, (err, hash) => {
    if (err) {
      console.log(err)
    }
    const Values = [sentEmail, sentUserName, hash]
    db.query(sqlGet, sentEmail, (error, results) => {
      if (results.length > 0) {
        // Show the error the Firstname already exist
        res.send({message: 'Email already exists'})
      } else {
        //query to execute sql statement
        db.query(SQL, Values, (err, result) => {
          if (err) {
            res.send(err)
          } else {
            res.send({message: 'User added'})
          }
        })
      }  
    });
  })
})

app.post('/login', (req, res) => {
  //get values from login page
  const sentLoginEmail = req.body.LoginEmail
  const sentLoginPassword = req.body.LoginPassword

  //create SQL statement to insert user to db table Users
  const SQL = 'SELECT * FROM users WHERE email = ?'

  db.query(SQL, sentLoginEmail, (err, results) => {
    if (err) {
      res.send({error: err})
    } if (results.length > 0) {
      bcrypt.compare(sentLoginPassword, results[0].password, (err, response) => {
        if (response) {
          res.send(results)
        } else {
          res.send({message: `Credentials don't match`})
        }
      })
    } else {
      res.send({message: `Credentials don't match`})
    }
  })
}) 

app.post('/dashboard', (req, res) => {
  const sentDate = req.body.Date
  const sentHours = req.body.Hours
  const sentJobLocation = req.body.JobLocation
  const sentDescription = req.body.Description
  const sentUserID = req.body.UserID

  const SQL = 'INSERT INTO workSegment (jobLocation, hoursWorked, dateWorked, descriptionNotes, userID) VALUES (?,?,?,?,?)'
  const Values = [sentJobLocation, sentHours, sentDate, sentDescription, sentUserID]
  const sqlCheckDate = `SELECT * FROM workSegment WHERE userID = ? AND dateWorked = ?`;
  const DateValues = [sentUserID, sentDate]
  db.query(sqlCheckDate, DateValues, (error, results) => {
    if (results.length > 0) {
      res.send({message: `Hours for this date already exist.`})
    } else {
      db.query(SQL, Values, (err, results) => {
        if (err) {
          res.send({error: err})
        } if (results.length > 0) {
          res.send(results)
        }
      })
    }
  })
})

app.get('/checkDates', (req, res) => {
  const date1 = req.body.FromDate
  const date2 = req.body.ToDate
  const sentID = req.body.UserID

  const grabDates = `SELECT * FROM workSegment WHERE userID = ? AND dateWorked BETWEEN ? AND ?`
  const grabValues = [sentID, date1, date2]
  db.query(grabDates, grabValues, (err, results) => {
    if (results.length > 0) {
      res.send(results)
    } else {res.send({message: 'No results found'})}
  })
})