const mongoose = require('mongoose')
const Schema = mongoose.Schema

const existSchema = new Schema ({
    namemush: String,
    mushcases: [{ type:mongoose.Types.ObjectId, ref: 'Mushroom'}],
    avgGrowth: Number
})

const existingMushroom = mongoose.model('existingMushroom', existSchema);

module.exports = existingMushroom;