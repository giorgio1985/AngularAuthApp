// import express (after npm install express)
const express = require('express');  // da installare 
const app = express();
const bodyParser = require("body-parser"); // da installare
const cors = require('cors'); // da installare
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
// create new express app and save it as "app"
var corsOptions = {    // <------------ da sistemare il cors policy
  origin: '*',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

// server configuration
const PORT = 3000;

// create a route for the app
app.get('/', (req, res) => {
  res.send('Hello World');
});

/*app.post('/registers', (req, res) =>{
var customs = req.body.customs;
console.log('yiyoyioiyoiy' + customs);
});*/
// make the server listen to requests
app.listen(PORT, () => {
  console.log(`Server running at: http://localhost:${PORT}/`);
});