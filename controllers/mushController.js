const router = require('express').Router();
const db = require('../models/index.js')

router.get('/', (req, res) => {
    db.Mushroom.find({})
    .populate('EstiTime')
    .exec((err, foundShrooms) => {
        if (err) return console.log(err);
        res.json(foundShrooms)
        console.log('populate check complete')
    })
})

router.get('/:id', (req, res) => {
    db.Mushroom.findById(req.params.id)
    .populate('EstiTime')
    .exec((err, foundShroooms) => {
        if(err) return console.log(err)
        res.json(foundShroooms)
    })
})

router.post('/', (req, res) => {
    db.Mushroom.create(req.body, (err, createdShroom) => {
        if(err) return console.log(err)
        res.json(createdShroom)
    })
})

router.put('/:id', (req, res) => {
    db.Mushroom.findByIdAndUpdate(
        req.params.id,
        req.body,
        {new: true},
        (err, updatedShroom) => {
            if(err) return console.log(err)
            res.json(updatedShroom)
        }
    )
})

router.delete('/:id', (req, res) => {
    db.Mushroom.findByIdAndDelete(req.params.id, (err, deletedShroom) => {
        if(err) return console.log(err)
        console.log('Deleted Shroom')
        res.json({messsage: 'Deleted'})
    })
})
module.exports = router;