const mongoose = require('mongoose')
const Schema = mongoose.Schema

const OrderDetSchema = new Schema({

    orderId: {
        type: Schema.Types.ObjectId,
        ref: 'Order'
    },
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'user'
    },
    qty: {
        type: Number,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    vendorProductId: {
        type: Schema.Types.ObjectId,
        ref: 'VendorProduct'
    },
}, {
    timestamps: true
})
module.exports = mongoose.model('OrderDetail', OrderDetSchema)