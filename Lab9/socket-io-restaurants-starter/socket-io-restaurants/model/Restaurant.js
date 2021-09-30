

const mongoose = require("mongoose")


// restaurant schema
const restaurantSchema = new mongoose.Schema({
    city: {
        type: String,
        required: true
    }, 
    cuisine: String,
    name: {
        type: String,
        require: true
    },
    active: {
        type: Boolean,
        default: true
    }

})

const collection = "Restaurant"
const Restaurant = mongoose.model('Restaurants', restaurantSchema, collection)   // name, schema, collection
module.exports = Restaurant