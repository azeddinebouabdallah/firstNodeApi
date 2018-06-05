const mongoose = require('mongoose');
let Schema = mongoose.Schema; // The Schema
let ObjectId = mongoose.Schema.Types.ObjectId; // Import the ID obj Automatic ID


let whishList = new Schema({
    title: {type: String, default: 'Cool wishlist'}, // Adding more params in this inst we're saying that the title has a String type with a default value of Cool WishList
    // We can also add required  {required: true} 
    products : [{type: ObjectId, ref : 'Product'}]
    // Relationship between wishlist and product model {Array of products}

});


// export it
module.exports = mongoose.model('wishList', whishList);