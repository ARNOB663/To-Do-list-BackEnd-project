var jwt = require('jsonwebtoken');


module.exports = (req,res,next)=>{

 let  token = req.headers['token-key'];

 jwt.verify(token, "SecretKey123", function(err, decoded) {
    if(err){
        res.status(401).json({ status: "fail", message: "Unauthorized Access" });
    }else{
         //Add get user name from decoded  token and add with request header
        let username = decoded['data']['UserName'];
        req.headers.username=username; 
        next();
    }
  });

}