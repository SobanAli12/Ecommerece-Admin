const jwt = require("jsonwebtoken")
const User =require("../models/usermodel");
require("dotenv").config();

exports.adminauth = async(req,res,next)=>{
    try {
        const user= await User.findById(req.user._id);
        if(user.role!==1){
            return res.status(401).send({
                success:false,
                message:"unauthorizes access"
            })
        }
        else{
            next();
        }
    } catch (error) {
        console.log(error);
        res.status(401).send({
            success:false,
            error,
            message:"error in admin dashboard"
        })
    }
}