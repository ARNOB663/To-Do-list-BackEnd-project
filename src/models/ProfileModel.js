const mongoose = require('mongoose');

const DataSchema=mongoose.Schema({
 


},{versionKey:false})

const ProfileModel = mongoose.model('Profile',DataSchema);
module.exports = ProfileModel;