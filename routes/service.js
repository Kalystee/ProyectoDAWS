const router = require('express').Router()
let Service = require("../models/Service.model")

router.route("/all").get((req,res) => {
     Service.find()
        .then(services => res.json(services))
        .catch(err => res.status(400).json({error:err}));
})

router.route('/:id').get((req,res) => {
    Service.findById(req.params.id)
        .then(service => res.json(service))
        .catch(err => res.status(400).json({error:err}));
})

router.route('/add').post((req,res) => {
    const newService = new Service(req.body);
    newService.save()
        .then(() => res.json(newService))
        .catch(err => res.status(400).json({error:err}));
});

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