const mongoose = require('mongoose')
const Schema = mongoose.Schema

const VenProSchema = new Schema({

    productId: {
        type: Schema.Types.ObjectId,
        ref: 'product'
    },
    vendorId: {
        type: Schema.Types.ObjectId,
        ref: 'Vendor'
    },
    qty: {
        type: Number,
        default: 1
    },
    price: {
        type: Number,
    },
}, {
    timestamps: true
})
module.exports = mongoose.model('VendorProduct', VenProSchema)