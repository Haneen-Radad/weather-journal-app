// Setup empty JS object to act as endpoint for all routes
let projectData = {};

// Require Express to run server and routes
const express = require('express');

// Start up an instance of app
const app = express();

/* Dependencies */
const bodyParser = require('body-parser');
const cors = require('cors');

/* Middleware*/
// Configure express to use body-parser as middleware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross-origin allowance
app.use(cors());

// Initialize the main project folder
app.use(express.static('website'));

// Setup Server
const port = 8000;
const server = app.listen(port, () => {
  console.log(`Server running on localhost:${port}`);
});

// GET method
app.get('/all', (req, res) => {
  res.send(projectData);
});

// POST method
app.post('/add', (req, res) => {
  projectData = {
    date: req.body.date,
    temp: req.body.temp,
    feel: req.body.feel,
  };
  res.send({ message: 'Data added successfully' });
});
