const Product = require("../models/Productmodel");
const { findByIdAndUpdate } = require("../models/usermodel");


exports.editproduct = async(req,res)=>{
    try {
        const {id} =req.params;
        const {name,price,category,quantity,photo} =req.body;
        const file = req.file ?req.file.filename:photo;
        const product =await Product.findByIdAndUpdate({_id:id},{
            name,category,price,quantity,photo:file
        },{new:true})
        
        res.status(200).send(product)
    } catch (error) {
    res.status(400).send({error,message:"this is from backend"}); 
    }
}

exports.deleteproduct =async(req,res)=>{
    const {id} =req.params;
    const product =await Product.findByIdAndRemove({_id:id});
    if(product){
        res.status(200).send("product delte succesfully");
    }
    else{
        res.status(200).send("product not  deleted");
    }
}
