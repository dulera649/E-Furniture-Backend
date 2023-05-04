const mongoose = require('mongoose')
const Schema = mongoose.Schema

const AdminSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
})
//model
// mongoose.model('employee',AdminSchema)
// module.exports = AdminSchema

module.exports = mongoose.model('Admin', AdminSchema)