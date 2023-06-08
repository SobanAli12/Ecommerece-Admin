const express=require("express");
const { register, login } = require("../controller/usercontroller");
const { default: Forgotpassword } = require("../../myapp/src/pages/Forgotpassword");
const route=express.Router()

route.post("/register", register)

route.post("/login", login)
route.post("/Forgotpassword", Forgotpassword)
module.exports =route;
