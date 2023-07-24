const express = require('express')
const app = express()
const mysql = require('mysql')
const cors = require('cors')

require('dotenv').config()
const USER = process.env.USER
const HOST = process.env.HOST
const PASS = process.env.PASSWORD
const DB = process.env.DB

app.use(express.json())
app.use(cors())

app.listen(3002, () => {
  console.log("Connected to backend! Port 3002")
})

//create database connection
const db = mysql.createPool({
  user: USER,
  host: HOST,
  password: PASS,
  database: DB,
})

app.post('/register', async (req, res) => {
  //get values from register page
  const sentEmail = req.body.Email
  const sentUserName = req.body.UserName
  const sentPassword = req.body.Password

  //create SQL statement to insert user to db table Users
  const SQL = 'INSERT INTO users (email, username, password) VALUES (?,?,?)'
  const Values = [sentEmail, sentUserName, sentPassword]

  //query to execute sql statement
  db.query(SQL, Values, (err, results) => {
    if (err) {
      res.send(err)
    } else {
      console.log('User inserted successfully')
      res.send({message: 'User added!!!'})
    }
  })
})