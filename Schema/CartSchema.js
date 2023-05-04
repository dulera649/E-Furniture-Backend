const mongoose = require('mongoose')
const Schema = mongoose.Schema

const cartSchema = new Schema({

    userId: {
        type: Schema.Types.ObjectId,
        ref: 'user'
    },
    venproId: {
        type: Schema.Types.ObjectId,
        ref: 'VendorProduct'
    },
    qty: {
        type: Number,
        default:1
    }
}, {
    timestamps: true,
})
module.exports = mongoose.model('cart', cartSchema)