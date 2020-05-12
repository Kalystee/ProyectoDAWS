//Guillaume THIBAULT

const router = require('express').Router();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const User = require("../models/User.model");
const Offerer = require("../models/Offerer.model");

router.route("/login").post(async (req,res) => {
    console.log(req.body);
    let user = await User.findOne({email:req.body.email})
    if(!user){
        res.status(403).json({error:"Wrong password or email"})
    }

    if(bcrypt.compareSync(req.body.password, user.password)){

        let token = jwt.sign({email:user.email},"secret",{expiresIn: "2h"})
        res.cookie("token",token);
        res.json({token})
    }else{
        res.status(403).json({error:"Wrong password or email"})
    }
})

router.post('/register',async (req,res) => {
    console.log(req);
    let user = await User.findOne({email:req.body.email})
    console.log("Register");
    if(user){
        res.status(403).json({error:"Email already used"});
    }
    console.log(req.body)
    if(req.body.email && req.body.password && req.body.name && req.body.tipo !== undefined && req.body.postalCode && req.body.city && req.body.address){
        let hashedPassword = bcrypt.hashSync(req.body.password,8);

        let newUser = new User(req.body);
        newUser.password = hashedPassword;
        newUser.save()
            .then(() => {
                if(newUser.tipo === 1){
                    let offererData = {
                        userId:newUser.id,
                    }
                    let newOfferer = new Oferrer(offererData);
                    newOfferer.save().then(() => {
                        console.log("Offerer Registered")
                    })
                }
                res.json(newUser)
            })
            .catch((err) => res.status(403).json({error:err}))

    }else{
        res.status(403).json({error:"Missing required field"})
    }
})


module.exports = router;