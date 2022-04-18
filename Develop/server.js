//requiring necessary modules to run app
const fs = require('fs');
const path = require('path');
const express = require('express');

//requiring both routes used to run app
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

//choosing port to run application locally
const PORT = process.env.PORT || 3008;

//creating express() as a function to be used as main function
const app = express();

//indicating the root from where to serve static files to the application as a whole to give application uniformity. 
app.use(express.static('public'));

//built in middleware function to parse incoming requests.
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//connecting routes to application
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

//function to listen to the port specified above.
app.listen(PORT, () => {
  console.log(`API server now on port ${PORT}!`);
});