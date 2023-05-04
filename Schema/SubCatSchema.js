const mongoose = require('mongoose')
const Schema = mongoose.Schema

const SubCatSchema = new Schema({

    categoryId: {
        type: Schema.Types.ObjectId,
        ref: 'category'
    },
    name: {
        type: String,
        required: true,
        unique: true
    },
    status: {
        type: Boolean,
        default: true
    }

}, {
    timestamps: true
})
module.exports = mongoose.model('SubCategory', SubCatSchema)