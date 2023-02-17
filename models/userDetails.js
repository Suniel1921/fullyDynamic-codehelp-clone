const mongoose = require('mongoose');

const userDetails = new mongoose.Schema({
    //for navbar
    brandName : String,
    dashBoard : String,
    login : String,
    links : [
        {
            label: String,
            url : String,
        }
    ]


})

module.exports = mongoose.model("user", userDetails);