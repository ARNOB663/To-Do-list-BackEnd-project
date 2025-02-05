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


exports.SelectToDoList = async (req,res)=>{
    try{
        let UserName = req.headers['username'];
        const data = await ToDoListModel.find({ UserName: UserName });
        if (data) {
            res.status(200).json({ status: "success", data: data });
        } else {
            res.status(404).json({ status: "fail", message: "Profile not found" });
        }

    }
    catch(err){
        res.status(400).json({ status: "fail", data: err });
    }

}
exports.UpdateToDoList = async (req,res)=>{
 try{

     let ToDoSubject = req.body['ToDoSubject']
      let  ToDoDescription = req.body['ToDoDescription']
     let _id = req.body['_id'] 
     let ToDoUpdateDate = Date.now();
        let PostBody={
            ToDoSubject:ToDoSubject,
            ToDoDescription:ToDoDescription,
            ToDoUpdateDate:ToDoUpdateDate
    
                }

        const data = await ToDoListModel.updateOne({_id:_id},{$set:PostBody},{upsert:true});
        if(data){
            res.status(200).json({ status: "update success", data: data });
        }
        else{
            res.status(404).json({ status: "fail", message: "Profile not found" });
        }
  }
 catch(err){
     res.status(400).json({ status: "fail", data: err });
 }

}

exports.UpdateStatusToDoList = async (req,res)=>{
  try{
    let _id = req.body['_id'] 
    let ToDoStatus = req.body['ToDoStatus']
    let ToDoUpdateDate = Date.now();
    let PostBody={
        ToDoStatus:ToDoStatus,
        ToDoUpdateDate:ToDoUpdateDate
    }
    const data = await ToDoListModel.updateOne({_id:_id},{$set:PostBody},{upsert:true});
    if(data){
        res.status(200).json({ status: "update success", data: data });
    }
    else{
        res.status(404).json({ status: "fail", message: "Profile not found" });
    }
  }
  catch(err){
    res.status(400).json({ status: "fail", data: err });
  }

}

exports.RemoveToDoList = async (req,res)=>{
    try{
        let _id = req.body['_id'] 
        const data = await ToDoListModel.deleteOne({_id:_id});
        if(data){
            res.status(200).json({ status: "delete success", data: data });
        }
        else{
            res.status(404).json({ status: "fail", message: "Profile not found" });
        }
    }
    catch(err){
        res.status(400).json({ status: "fail", data: err });
    }
}

exports.SelectToDoByStatus = async (req,res)=>{
    try{
        let UserName = req.headers['username'];
        let ToDoStatus = req.body['ToDoStatus']
        const data = await ToDoListModel.find({ UserName: UserName,ToDoStatus:ToDoStatus });
        if (data) {
            res.status(200).json({ status: "success", data: data });
        } else {
            res.status(404).json({ status: "fail", message: "Profile not found" });
        }
    }
    catch(err){
        res.status(400).json({ status: "fail", data: err });
    }    
}
exports.SelectToDoByDate = async (req,res)=>{
    try{
        let UserName = req.headers['username'];

        let FromDate = req.body['FromDate']
        let ToDate = req.body['ToDate']

        const data = await ToDoListModel.find({ UserName: UserName,ToDoCreateDate:{$gte:FromDate,$lte:ToDate} });
        if (data) {
            res.status(200).json({ status: "success", data: data });
        } else {
            res.status(404).json({ status: "fail", message: "Profile not found" });
        }
    }
    catch(err){
        res.status(400).json({ status: "fail", data: err });
    }    
}