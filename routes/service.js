//Guillaume THIBAULT

const auth = require( "./middleware/auth");

const router = require('express').Router()
let Service = require("../models/Service.model");
let Categorie =require("../models/Categorie.model");
let User = require("../models/User.model");

router.route("/").get(async (req,res) => {

    let services = await Service.find()
        .then(services => {
            return services;
        })
        .catch(err => res.status(400).json({error:err}));

    if(req.query.categorie){
        services = services.filter(s => s.categorie === req.query.categorie)
    }
    if(req.query.name){
        services = services.filter(s => s.name.toUpperCase().includes(req.query.name.toUpperCase()))
    }

    res.json(services)
})

router.get('/:id',auth.checkToken,(req,res) => {
    Service.find({_id:req.params.id})
        .then(service => res.json(service))
        .catch(err => res.status(400).json({error:err}));
})

router.get('/by-offerer/:offererId',auth.checkToken,(req,res) => {
    Service.find({offererId:req.params.offererId})
        .then(service => res.json(service))
        .catch(err => res.status(400).json({error:err}));
})

router.get('/by-client/:clientId',auth.checkToken,(req,res) => {
    Service.find({clientId:req.params.clientId})
        .then(service => res.json(service))
        .catch(err => res.status(400).json({error:err}));
})

router.route('/by-categories/:categoryId').get((req,res) => {
    Service.find({categoryId:req.params.categoryId})
        .then(service => res.json(service))
        .catch(err => res.status(400).json({error:err}));
})

router.post('/add',auth.checkToken, async (req,res) => {
    const newService = new Service(req.body);
    if(req.body.name && req.body.offererId && req.body.categoryId && req.body.description && req.body.address  && req.body.price){
        let category = await Categorie.findOne({id:req.body.categoryId});
        let user = await User.findOne({email:req.body.offererId});
        if(user.tipo === 1 && category){
            newService.save()
                .then(() => res.json(newService))
                .catch(err => res.status(400).json({error:err}));
        }else{
            res.status(403).json({error:"User is not an offerer or invalid categoryId"})
        }
    }else{
        res.status(403).json({error:"Missing parameters"})
    }
})


router.delete('/:id',auth.checkToken,(req,res) => {
    Service.findByIdAndDelete(req.params.id)
        .then(service => res.json(service))
        .catch(err => res.status(400).json({error:err}));
})

router.put('/:id',auth.checkToken,(req,res) => {
    Service.findById(req.params.id)
        .then(service => {
            service.name = req.body.name;
            service.description = req.body.description;
            service.address = req.body.address;
            service.price = req.body.price;

            service.save()
                .then(() => res.json(service))
                .catch(err => res.status(400).json({error:err}))
        })
        .catch(err => res.status(400).json({error:err}));
})

router.put('/update-client/:id/:clientId',auth.checkToken,async (req,res) => {
    Service.findById(req.params.id)
        .then(service => {
            service.clientId = req.params.clientId;
            service.save()
                .then(() => res.json(service))
                .catch(err => res.status(400).json({error:err}))
        })
        .catch(err => res.status(400).json({error:err}));
})

module.exports = router;