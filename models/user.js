const mongoose = require("mongoose")

const Employee = new mongoose.Schema({
    fname: String,
    lname: String,
    email: String,
    address: String
});

module.exports = mongoose.model('Employee', Employee);
