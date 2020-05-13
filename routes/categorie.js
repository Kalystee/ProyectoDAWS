//Guillaume THIBAULT

const router = require('express').Router()
let Categorie = require("../models/Categorie.model")

router.route("/").get((req,res) => {
    Categorie.find()
        .then(categories => res.json(categories))
        .catch(err => res.status(400).json({error:err}));
});

router.route('/:id').get((req,res) => {
    Categorie.findById(req.params.id)
        .then(categorie => res.json(categorie))
        .catch(err => res.status(400).json({error:err}));
})

router.route('/add').post((req,res) => {
    const newCategorie = new Categorie(req.body);
    newCategorie.save()
        .then(() => res.json(newCategorie))
        .catch(err => res.status(400).json({error:err}));
});

router.route('/update/:id').post((req,res) => {
    Categorie.findBy({id:req.params.id})
        .then(categorie => {
            categorie.name = req.body.name;
            categorie.description = req.body.description;

            categorie.save()
                .then(() => res.json(categorie))
                .catch(err => res.status(400).json({error:err}))
        })
        .catch(err => res.status(400).json({error:err}));
})

router.route('/delete/:id').post((req,res) => {
    Categorie.findOneAndDelete({id:req.params.id}, function(err, obj) {
        if (err) throw err;
        res.json("Done")
    })

})

module.exports = router;