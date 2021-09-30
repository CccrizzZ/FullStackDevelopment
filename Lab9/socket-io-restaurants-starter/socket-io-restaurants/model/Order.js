

const mongoose = require("mongoose")


// order schema
const orderSchema = new mongoose.Schema({
    order_id: {
        type: String,
        required: true
    },
    item: {
        type: String,
        required: true
    },
    customer_name: {
        type: String,
        required: true
    }

})

const collection = "Orders"
const Order = mongoose.model('Orders', orderSchema, collection)
module.exports = Order