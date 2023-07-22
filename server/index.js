import express from "express"

const app = express()

app.listen(8800, () => {
  console.log("Connected to backend!")
})

//create database
const db = mysql.createConnection({
  user: 'root',
  host: 'localhost',
  password: '', //none for now
  database: 'timesheetdb',
})

app.post('./register', (req, res) => {
  //get values from register page
})