const mongoose = require('mongoose');

const DataSchema = mongoose.Schema({
    UserName:{
         type:string,
    },
    ToDoSubject:{
        type:string,
    },
    ToDoDescription:{
        type:string,
    },
    ToDoStatus:{
        type:string,
        default:"New"
    },
    ToDoDate:{
        type:Date,
        default:Date.now
    }


},{versionKey:false});

const ToDoListModel = mongoose.model('Todolist',DataSchema);
module.exports = ToDoListModel;