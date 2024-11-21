/*
Import the mysql2 package in your server.js file
Establish a connection to your MySQL database using the credentials from your .env file
Create a SQL query to retrieve all patients
Use the app.get() method to create a GET endpoint that executes the SQL query and returns the results
*/


const express = require('express')
const app = express()
const mysql = require('mysql2/promise')

  
//Load  environment  variables  from .env
  require('dotenv').config();

  //establish database connecton
  const db = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
  });

// Question 1 goes here

// Create GET endpoint to retrieve all patients
app.get('/patients', async (req, res) => { //This is a GET route handler for the /patients endpoint.
    try { //This is a try-catch block to handle any errors
      const [rows, fields] = await db.execute('SELECT patient_id, first_name, last_name, date_of_birth FROM patients');
      res.json(rows);
    } catch (err) {
      console.log(err);
      res.status(500).json({ message: 'Error retrieving patients' });
    }
  });


// Question 2 goes here

// Create GET endpoint to retrieve all providers

app.get('/providers', async  (req, res) => {
    try {
        const [rows, fields] = await db.execute('SELECT provider_id, first_name, last_name, provide_specialty, email_address, phone_number, date_joined FROM providers)');
        res.json(rows);
    } catch (err) {
        console.log(err);
        res.status(500).json({message: 'Error retrieving providers'});

    }
})
// Question 3 goes here


//Filter patients by First Name
app.get('/patients/by-first-name', async ( req, res) => {
    try {
        const [rows, field] = await db.execute ('SELECT * FROM patients WHERE first_name = ?', first_name);
        res.json(rows);
    } catch(err) {
        console.log(err)
        res.status(500).json({message: 'Error retrieving first_name from patients table'});
    }
})

// Question 4 goes here
//Retrieve all providers by their specialty
app.get('providers', async (req, res) => {
  try {
      const[rows, field] = await db.execute ('SELECT')
  } catch (err){
    console.log(err)
    res.status(500).json ({message: 'Error retieving specialty'})

  }
})


// listen to the server
const PORT = 3000
app.listen(PORT, () => {
  console.log(`server is runnig on http://localhost:${PORT}`)
})