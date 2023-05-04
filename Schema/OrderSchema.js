const mongoose = require('mongoose')
const Schema = mongoose.Schema

const OrderSchema = new Schema({

    userId: {
        type: Schema.Types.ObjectId,
        ref: 'user'
    },
    total: {
        type: Number,
    },
    statusId: {
        type: Schema.Types.ObjectId,
        ref: 'Status'
    },
    addressId: {
        type: Schema.Types.ObjectId,
        ref: 'CustAdd'
    },
}, {
    timestamps: true
})
module.exports = mongoose.model('Order', OrderSchema)