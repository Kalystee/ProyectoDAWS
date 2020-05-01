const jwt = require("jsonwebtoken");

function checkToken(req,res,next){
    let token = req.get("x-auth");
    if(token){
        jwt.verify(token,'secret',function (err,payload) {
            if(err){
                res.status(401).json({error:"Wrong token"});
            }else{
                req.correo = payload.correo;
                next();
            }
        })
    }else{
        res.status(403).json({error:"Missing token"});
    }

}

module.exports = {checkToken};