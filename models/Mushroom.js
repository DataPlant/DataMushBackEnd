const mongoose = require('mongoose')
const Schema = mongoose.Schema

const mushSchema = new Schema({
    mushName: String,
    scientificName: String,
    humidity: Number,
    estiGdays: Number,
    energSource: String,
    
})

const Mushroom = mongoose.model('Mushroom', mushSchema)

module.exports = Mushroom