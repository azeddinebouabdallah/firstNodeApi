const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

// Connection to DB
let db = mongoose.connect('mongodb://localhost/swag-shop');

let Product = require('./model/product');
let WishList = require('./model/whishList');


// Filter
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : false}));


// Run server on port 3000 
app.listen(3000, function(){
    console.log('Server is running on PORT : 3000');
});