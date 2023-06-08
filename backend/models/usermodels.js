const mongoose =require("mongoose");

const UserSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    phone:{
        type:Number,
        required:true
    },
    answer:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    role:{
        type:Number,
        default:0
    }
},{timestamps:true})

    // password hashing
UserSchema.pre("save", async function(next){
    if(this.isModified("password")){
        this.password = await  bcrypt.hash(this.password,10);
    }
    next();
})



    //token generation
UserSchema.methods.generatetoken =async function(){
    try {
        let usertoken = jwt.sign({_id:this._id},key);
        return usertoken;
    } catch (error) {
        res.status(422).send(error)
    }
}


    const usermodels = mongoose.model("User",UserSchema)


    module.exports=usermodels;