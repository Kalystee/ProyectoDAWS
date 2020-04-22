const router = require('express').Router()
let User = require("../models/User.model")

router.route("/").get((req,res) => {
    User.find()
        .then(users => res.json(users))
        .catch(err => res.status(400).json({error:err}));
});

router.route('/:id').get((req,res) => {
    User.findById(req.params.id)
        .then(user => res.json(user))
        .catch(err => res.status(400).json({error:err}));
})

router.route('/add').post((req,res) => {
    const newUser = new User(req.body);
    newUser.save()
        .then(() => res.json(user))
        .catch(err => res.status(400).json({error:err}));
});

router.route('/:id').delete((req,res) => {
    User.findByIdAndDelete(req.params.id)
        .then(user => res.json())
        .catch(err => res.status(400).json({error:err}));
})

router.route('/update/:id').post((req,res) => {
    User.findById(req.params.id)
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