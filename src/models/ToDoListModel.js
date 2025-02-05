const mongoose = require('mongoose');

const DataSchema = mongoose.Schema({


},{versionKey:false});

const ToDoListModel = mongoose.model('profile',DataSchema);
module.exports = ToDoListModel;