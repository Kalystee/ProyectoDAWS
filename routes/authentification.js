const router = require('express').Router();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const User = require("../models/User.model");


router.route("/login").post(async (req,res) => {
    let user = await User.findOne({email:req.body.email})
    if(!user){
        res.json({error:"Wrong password or email"})
    }

    if(bcrypt.compareSync(req.body.password, user.password)){
        let token = jwt.sign({email:user.email},"secret",{expiresIn: "2 days"})
        res.json({token})
    }else{
        res.json({error:"Wrong password or email"})
    }
})

router.route('/register').post(async (req,res) => {
    let user = await User.findOne({email:req.body.email})
    if(user){
        res.json({error:"Email already use"});
    }
    if(req.body.email && req.body.password && req.body.firstName && req.body.lastName && req.body.age && req.body.sex && req.body.address){
        let hashedPassword = bcrypt.hashSync(req.body.password,8);

        let newUser = new User(req.body);
        newUser.password = hashedPassword;
        newUser.save()
            .then(() => res.json(newUser))
            .catch((err) => res.json({error:err}))

    }else{
        res.json({error:"Missing required field"})
    }
})

module.exports = router;