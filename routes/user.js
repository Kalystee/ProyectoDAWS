//Guillaume THIBAULT

const router = require('express').Router()
let User = require("../models/User.model")
const auth = require("./middleware/auth")
router.get("/",auth.checkToken,(req,res) => {
    User.find()
        .then(users => res.json(users))
        .catch(err => res.status(400).json({error:err}));
});

router.get("/:email",auth.checkToken,(req,res) => {
    User.findOne({email:req.params.email})
        .then(user => res.json(user))
        .catch(err => res.status(400).json({error:err}));
});

router.route('/:email').delete((req,res) => {
    User.findOneAndDelete({email:req.params.email})
        .then(user => res.json(user))
        .catch(err => res.status(400).json({error:err}));
})

router.route('/update/:email').post((req,res) => {
    User.findOne({email:req.params.email})
        .then(user => {
            user.username = req.body.username;
            user.firstName = req.body.firstName;

            user.save()
                .then(() => res.json(user))
                .catch(err => res.status(400).json({error:err}))
        })
        .catch(err => res.status(400).json({error:err}));
})

module.exports = router;