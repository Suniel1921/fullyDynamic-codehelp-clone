const mongoose = require("mongoose");
const headerSec = new mongoose.Schema({
    paraGraph : String,
    learnMore : String,
    viewCourse : String,
    mainImgUrl : String,
})

module.exports = mongoose.model('mainsection', headerSec);