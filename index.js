const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
var mongoose = require('mongoose');
var routes = require('./routes');
const app = express();
const PORT = process.env.PORT || 5000

app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());
app.use(cors());
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin','*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With, content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});
/* 
 Route all requests to routes.js file
*/

app.use('/', routes);
/*
  Backend server is listening to port 3001
*/
app.listen(PORT, () => {
    console.log(`Server is listening to port ${PORT}`);
})