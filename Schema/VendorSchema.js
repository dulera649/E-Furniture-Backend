const mongoose = require('mongoose')
const Schema = mongoose.Schema

const VendorSchema = new Schema({

    Name: {
        type: String,
        required: true
    },
    Address: {
        type: String,
    },
    stateId: {
        type: Schema.Types.ObjectId,
        ref: 'State'
    },
    cityId: {
        type: Schema.Types.ObjectId,
        ref: 'City'
    },
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'user'
    },
    pincode: {
        type: Number,
        unique: true
    },
    contactNum: {
        type: Number,
    },
    CustomerSupportNumber: {
        type: Number,
    },
    feedbackemail: {
        type: String
    }

}, {
    timestamps: true
})
module.exports = mongoose.model('Vendor', VendorSchema)