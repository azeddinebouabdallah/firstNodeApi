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

// Create the API
// Create new product
app.post('/product', function(req, res){
    // Or do new Product(req.body);
    var product = new Product();
    product.title = req.body.title;
    product.price = req.body.price;
    product.likes = 0;
    product.save(function(err, savedProduct){
        if (err) {
            res.status(500).send({error: "There was an error in saving data"});
        }else {
            res.status(200).send(savedProduct);
        }
    });
});

// Run server on port 3000 
app.listen(3000, function(){
    console.log('Server is running on PORT : 3000');
});