const mongoose = require('mongoose')
const Schema = mongoose.Schema

const CustAddSchema = new Schema({

    userId: {
        type: Schema.Types.ObjectId,
        ref: 'user'
    },
    address: {
        type: String,
        required: true,
    },
    stateId: {
        type: Schema.Types.ObjectId,
        ref: 'State'
    },
    cityId: {
        type: Schema.Types.ObjectId,
        ref: 'City'
    },
    pincode: {
        type: Number,
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
module.exports = mongoose.model('CustAdd', CustAddSchema)