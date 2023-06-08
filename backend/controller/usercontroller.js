const { hashpassword } = require("../middleware/helper");
const Usermodel=require("../models/usermodels")
const bcrypt=require("bcryptjs")

exports.register=async(req,res) =>{
    try{
    const { name, email, password, phone,answer, address} = req.body;
    if (!name || !email || !password || !phone || !answer || !address) {
      res.status(400).send("all fields compulsory");
    }
    const userexits=await Usermodel.findOne({email})
    if(userexist)
    {
        return res.status(200).send("user already exist, please lgin")
    }
    const hash=await hashpassword(password);
    const newuser=new Usermodel({name, email, password, phone ,answer, address});
    const usersave=await newuser.save();
    res.status(200).send({message:"user register successfully", usersave});

}
catch(error)
{
    res.status(500).send({message:"user register failed"}, error);
}
};

exports.login = async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
      res.status(400).send("filled all your field");
    }
    try {
      const user = await User.findOne({ email: email });
      if (user) {
        const passwordcheck = await bcrypt.compare(password, user.password);
        if (passwordcheck) {
          const token = await user.generatetoken();
          console.log(token);
          res.status(200).send({ token, user });
        }
      } else {
        res.status(400).send("this user does not exist");
      }
    } catch (error) {
      res.status(400).send(error);
    }
  };

  exports.Forgotpassword=async(req, res)=>{
    try{
      const {email, answer, newpassword}=req.body;
      if(!email || !answer || !newpassword){
        return res.status(400).send({message: "please fill all fields"})
      }
      const user=await User.findOne({email:email, answer:answer, newpassword:newpassword})
      if(!user)
      {
        return res.status(400).send({message: "user not existed"})
      }
      const hash=await hashpassword(newpassword);
      const updatepassword=await User.findByIdAndUpdate(user._id, {password:hash}, {new:true})
      res.status(200).send({message: "password reset successfully"});
      
    }catch(error)
    {
      res.status(400).send(message,"forgot password failed", error);
    }
  }