const mongoose = require('mongoose');
// Import Schema class from the mongoose module
let Schema = mongoose.Schema;
// Create the Schema of our table or model let's say

let product  = new Schema({
    title: String,
    price: Number, 
    likes: {type: Number, default: 0}
});

// Export module  = mongoose model (NameOfModel , Schema)
module.exports = mongoose.model('Product', product);