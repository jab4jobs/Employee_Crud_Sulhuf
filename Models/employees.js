const mongoose = require('mongoose');

const empSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    position: {
        type: String,
        required: true, 
    },
    email: {
        type: String,
        required: true, 
    },  
    phone: {
        type: Number,
        required: true, 
    }, 
    address: {
        type: String,
        required: true, 
    },  
    country: {
        type: String,
        required: true, 
    },     
    registered_on: {
        type: Date,
        default: new Date(),
    },
});

var employees = mongoose.model('employees', empSchema);
module.exports = employees;