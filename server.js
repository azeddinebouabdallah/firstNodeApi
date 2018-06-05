const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

var db = mongoose.connect('mongodb://localhost/swag-shop')
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : false}));

app.listen(3000, function(){
    console.log('Server is running on PORT : 3000');
});