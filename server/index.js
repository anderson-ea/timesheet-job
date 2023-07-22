const express = require('express')
const app = express()
const mysql = require('mysql')
const cors = require('cors')

require('dotenv').config()
const USER = process.env.USER
const HOST = process.env.HOST
const PASS = process.env.PASSWORD
const DB = process.env.DB


app.listen(8800, () => {
  console.log("Connected to backend!")
  console.log(HOST)
})

//create database
const db = mysql.createConnection({
  user: USER,
  host: HOST,
  password: PASS,
  database: DB,
})

app.post('./register', (req, res) => {
  //get values from register page
})