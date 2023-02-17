
const mongoose = require('mongoose');
const userDetails = require('../models/userDetails');
const headerSec = require ('../models/headingSec');
mongoose.set('strictQuery', true);
mongoose.connect('mongodb+srv://anil:anil1921@cluster0.634sltj.mongodb.net/?retryWrites=true&w=majority')
.then(()=>{
    console.log("Database Connected !");
    //FOR NAVBAR
    // userDetails.create({
    //     brandName: "logo.png",
    //     dashBoard : "Dashboard",
    //     login : "login",
    //     links: [
    //         {
    //             label : "Home",
    //             url : "/"
    //         },
    //         {
    //             label : "About us",
    //             url : "/about"
    //         },
    //         {
    //             label : "Contact",
    //             url : "/contact"
    //         },

    //     ]
    // })

    //for main section
    
    // headerSec.create({
    //     paraGraph : "The Ultimate Guide To Ace SDE Interviews.",
    //     learnMore : "Learn More",
    //     viewCourse : "View Courses",
    //     mainImgUrl : "main.png",
    // })


}).catch((error)=>{
    console.log(`Database not Connected ! ${error}`);
});

// module.exports = mongoose;