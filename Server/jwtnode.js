const express = require('express');
const app =express();
const cors=require('cors');
app.use(cors());
app.use(express.json());
const jwt=require('jsonwebtoken');
app.listen(4048);
console.log("SERVER START");
const decode=require('jwt-decode');

let userArray=[{userName:"vignesh",userPassword:"welcome"}]

app.post("/signUp",(req,res)=>{
    const newUser={userName:req.body.userName,userPassword:req.body.userPassword}
    //res.send(newUser)
    userArray.push(newUser);
    res.send(userArray)
})

app.post("/sendToken",(req,res)=>{
    const token=req.body.token;
    //res.send(newUser)
    const decodedToken=decode(token);
        res.send(decodedToken.userName)
})


app.post("/signIn",(req,res)=>{
    let verifyUser=userArray.filter(iterUser=>{
        return iterUser.userName===req.body.userName&&iterUser.userPassword===req.body.userPassword
    })
if(verifyUser.length!=0)
{
    let token=jwt.sign(verifyUser[0],"jwt_encrypted",{expiresIn:'1h'});
    res.send(token);
}
else
{
    console.log("False");
    res.send("Invalid Credintials");
}
})

