const express = require('express')
const app = express()
const mysql = require('mysql')
const cors = require('cors')

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
})

app.post('/register', (req, res) => {
  //get values from register page
  const sentEmail = req.body.Email
  const sentUserName = req.body.UserName
  const sentPassword = req.body.Password

  //create SQL statement to insert user to db table Users
  const SQL = 'INSERT INTO users (email, username, password) VALUES (?,?,?)'
  const Values = [sentEmail, sentUserName, sentPassword]

  //query to execute sql statement
  db.query(SQL, Values, (err, result) => {
    if (err) {
      res.send(err)
    } else {
      console.log('User inserted successfully')
      res.send({message: 'User added!!!'})
    }
  })
})

app.post('/login', (req, res) => {
  //get values from login page
  const sentLoginEmail = req.body.LoginEmail
  const sentLoginPassword = req.body.LoginPassword

  //create SQL statement to insert user to db table Users
  const SQL = 'SELECT * FROM users WHERE email = ? && password = ?'
  const Values = [sentLoginEmail, sentLoginPassword]

  db.query(SQL, Values, (err, results) => {
    if (err) {
      res.send({error: err})
    } if (results.length > 0) {
      res.send(results)
    } else {
      res.send({message: `Credentials don't match`})
    }
  })
}) 