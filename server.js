const express = require('express');
const app = express();

const hbs = require('hbs');
const Database = require('./database/conn');
const routes = require('./routes/main');
const userDetails = require('./models/userDetails');
const headerSec = require('./models/headingSec');



const path = require('path');

const PORT = process.env.PORT || 4000;

const publicPath = path.join(__dirname, 'public');
// const partialsPath = path.join(__dirname, 'partials');

//setting path 
app.use(express.static('public'));

app.use('', routes);

//template engine (hbs)
app.set('view engine', 'hbs');
app.set('views', 'views')
hbs.registerPartials("views/partials");

//routes
// app.get("/", (req, res)=>{
//     res.render("index");
// })


app.listen(PORT, (req,res)=>{
    console.log(`Server is running on port no : ${PORT}`);
})
