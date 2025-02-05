const mongoose = require('mongoose');
const ProfileModel = require('../models/ProfileModel.js');

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
            res.status(200).json({ status: "success", data: data });
        } else {
            res.status(401).json({ status: "fail", message: "Invalid Username or Password" });
        }
    } catch (err) {
        res.status(400).json({ status: "fail", data: err });
    }
};