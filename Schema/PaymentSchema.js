const mongoose = require('mongoose')
const Schema = mongoose.Schema

const PaymentSchema = new Schema({

    orderId: {
        type: Schema.Types.ObjectId,
        ref: 'Order'
    },
    status: {
        type: Boolean,
        default: true,
    },
    amount: {
        type: Number,
        required: true,
    },
    type: {
        type: String,
        required: true,
    },
    transactionCode: {
        type: Number,
        required: true,
    },
}, {
    timestamps: true
})
module.exports = mongoose.model('Payment', PaymentSchema)