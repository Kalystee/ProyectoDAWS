//Guillaume THIBAULT

const router = require('express').Router()
let Service = require("../models/Service.model")

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

router.route('/by-offerer/:offererId').get((req,res) => {
    Service.findBy({offererId:req.params.offererId})
        .then(service => res.json(service))
        .catch(err => res.status(400).json({error:err}));
})

router.route('/by-categories/:categoryId').get((req,res) => {
    Service.findBy({categoryId:req.params.categoryId})
        .then(service => res.json(service))
        .catch(err => res.status(400).json({error:err}));
})

router.route('/add').post((req,res) => {
    const newService = new Service(req.body);
    if(req.body.name && req.body.offererId && req.body.categoryId && req.body.description && req.body.date && req.body.time && req.body.price){
        newService.save()
            .then(() => res.json(newService))
            .catch(err => res.status(400).json({error:err}));
    }else{
        req.status(403).json({error:"Missing parameters"})
    }
})


router.route('/:id').delete((req,res) => {
    Service.findByIdAndDelete(req.params.id)
        .then(service => res.json({msg:"Success"}))
        .catch(err => res.status(400).json({error:err}));
})

router.route('/update/:id').post((req,res) => {
    Service.findById(req.params.id)
        .then(service => {
            service.name = req.body.name;
            service.description = req.body.description;
            service.date = req.body.date; //Date.parse en el frontend
            service.time = req.body.time;
            service.price = req.body.price;

            service.save()
                .then(() => res.json(service))
                .catch(err => res.status(400).json({error:err}))
        })
        .catch(err => res.status(400).json({error:err}));
})

module.exports = router;