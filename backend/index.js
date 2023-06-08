const express=require("express");
const app=express();
require("dotenv").config()
require("./bdconn/dbconn")

const port=process.env.PORT

const userroute=require("./router/route")
app.use(express.json());

app.use(route)

app.listen(port, ()=>{
    console.log('server listening on port no:${port}')
})
