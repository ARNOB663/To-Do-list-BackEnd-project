const mongoose = require('mongoose');
const ProfileModel = require('../models/ProfileModel.js');
const jwt = require('jsonwebtoken');

exports.CreateProfile = async (req, res) => {
    try {
        let reqbody = req.body;
        const data = await ProfileModel.create(reqbody);
        res.status(200).json({ status: "success", data: data });
    } catch (err) {

        res.status(400).json({ status: "fail", data: err });
    }
};
exports.UserLogin = async (req, res) => {
    try {
        let UserName = req.body.UserName;
        let Password = req.body.Password;
        const data = await ProfileModel.find({ UserName: UserName, Password: Password });
        if (data.length > 0) {
           // creat auth token
            let Payload = {
                exp: Math.floor(Date.now() / 1000) + (24 * 60 * 60),
                data:data[0] //user data 
            }
            let token = jwt.sign(Payload,"SecretKey123");

            res.status(200).json({ status: "success", token: token , data: data});
        } else {
            res.status(401).json({ status: "fail", message: "Invalid Username or Password" });
        }
    } catch (err) {
        res.status(400).json({ status: "fail", data: err });
    }
};


exports.SelectProfile = async (req, res) => {
    try {
        let UserName = req.headers['username'] // Assuming UserName is passed as a URL parameter
        const data = await ProfileModel.find({ UserName: UserName });
        if (data) {
            res.status(200).json({ status: "success", data: data });
        } else {
            res.status(404).json({ status: "fail", message: "Profile not found" });
        }
    } catch (err) {
        res.status(400).json({ status: "fail", data: err });
    }
};


exports.UpdateProfile = async (req,res)=>{
   try{
      let UserName=req.headers['username'];
      let reqBody=req.body;

    const data=await ProfileModel.findOneAndUpdate({UserName:UserName},reqBody,{new:true});
    if(data){
        res.status(200).json({ status: "update success", data: data });
    }else{
        res.status(404).json({ status: "fail", message: "Profile not found" });
    }

   }
   catch(err){
       res.status(400).json({ status: "fail", data: err });
   }


}
