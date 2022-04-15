const router = require('express').Router();
const db = require('../models/index.js')

router.get('/', (req, res) => {
    db.Mushrooms
})