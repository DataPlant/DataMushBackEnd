const router = require('express').Router();
const db = require('../models/index.js')

router.get('/', (req, res) => {
    db.Mushroom.find({})
    .populate('mushID')
    .exec((err, foundProj) => {
        if (err) return console.log(err);
        res.json(foundProj)
        console.log('populate check complete')
    })
})

router.get('/:id', (req, res) => {
    db.Mushroom.findById(req.params.id)
    .populate('mushID')
    .exec((err, foundProj) => {
        if(err) return console.log(err)
        res.json(foundProj)
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