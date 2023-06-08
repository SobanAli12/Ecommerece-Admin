// const mongoose=require("mongoose")

// mongoose.connect("mongodb://127.0.0.1:27017/ecommerece-website").then(()=>{
//     console.log("connection successful")
// }).catch((e)=>{
//     console.log(e)
// })

const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/ecommerece-website', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log('Connected to the database');
    // Further code for your application
  })
  .catch((error) => {
    console.error('Error connecting to the database', error);
  });

