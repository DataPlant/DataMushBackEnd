const mongoose = require('mongoose')
const Schema = mongoose.Schema

const estiTimeSchema = new Schema({
    time: Number,
    mushID: {type:mongoose.Types.ObjectId, ref: 'Mushroom'}
})

const EstiTime = mongoose.model('EstiTime', estiTimeSchema)

module.exports = EstiTime;