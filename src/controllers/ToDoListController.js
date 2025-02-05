const ToDoListModel = require('../models/ToDoListModel');

exports.CreateToDoList = async (req, res) => {
    try{
        let reqbody = req.body;
        let ToDoSubject = reqbody['ToDoSubject'];
        let ToDoDescription = reqbody['ToDoDescription'];
        let UserName = req.headers['username'];
        let ToDoStatus = "New";
        let ToDoCreateDate = Date.now();
        let ToDoUpdateDate = Date.now();
        let PostBody={
            UserName:UserName,
            ToDoSubject:ToDoSubject,
            ToDoDescription:ToDoDescription,
            ToDoStatus:ToDoStatus,
            ToDoCreateDate:ToDoCreateDate,
            ToDoUpdateDate:ToDoUpdateDate
        }
     const data = await ToDoListModel.create(PostBody);
    
            res.status(200).json({ status: "success", data: data });
    
    }
    catch(err){
        res.status(400).json({ status: "fail", data: err });
    }

}