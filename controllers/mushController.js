const router = require('express').Router();
const db = require('../models/index.js')

router.get('/', (req, res) => {
    db.Mushrooms.find({})
    .populate('EstiTime')
    .exec((err, foundShrooms) => {
        if (err) return console.log(err);
        res.json(foundShrooms)
        console.log('populate check complete')
    })
})