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