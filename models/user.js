const mongoose = require("mongoose")

const employee = new mongoose.Schema({
    fname: String,
    lname: String,
    email: String,
    address: String
});

module.exports = mongoose.model('employee', employee);
