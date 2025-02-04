const mongoose = require('mongoose');

const DataSchema=mongoose.Schema({
  FirstName:{
    type:String,
  },
  LastName:{
    type:String,
  },
    EmailAddress:{
        type:String,
    },
    MobileNumber:{
        type:String,
    },


},{versionKey:false})

const ProfileModel = mongoose.model('Profile',DataSchema);
module.exports = ProfileModel;