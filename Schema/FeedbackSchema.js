const mongoose = require('mongoose')
const Schema = mongoose.Schema

const FeedbackSchema = new Schema({

    type: {
        type: String,
    },
    title: {
        type: String,
    },
    content: {
        type: String,
    },
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'user'
    },
    vendorId: {
        type: Schema.Types.ObjectId,
        ref: 'Vendor'
    },
    resolve: {
        type: String,
    },
    createdAt: {
        type: Number,
    },
    vendorsAns: {
        type: String,
    },
    adminAns: {
        type: String,
    },
}, {
    timestamps: true
})
module.exports = mongoose.model('Feedback', FeedbackSchema)