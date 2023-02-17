// const routes = require('express').Router();
const express = require("express");
const { model } = require("mongoose");
const routes = express.Router();

const userDetails = require('../models/userDetails');
const headerSec = require("../models/headingSec");



routes.get('/', async (req, res)=>{
  const showData = await userDetails.findOne({"_id":"63ed88807a2742eda366f7ee"});
    // console.log(showData);
    const headerData = await  headerSec.findOne({"_id": "63eeb90cedcca4abae0988ab"});
    // console.log(headerData)
    res.render("index", {
        showData:showData,
        headerData:headerData,
    })
})

//for about page

routes.get("/about", async (req, res)=>{
  const showData = await userDetails.findOne({"_id":"63ed88807a2742eda366f7ee"});
  res.render("about",{
    showData:showData,
  });
})


//for contact page 

routes.get("/contact", async (req, res)=>{
  const showData = await userDetails.findOne({"_id":"63ed88807a2742eda366f7eeb"});
  res.render("contact",{
    showData:showData,
  });
})






module.exports = routes;