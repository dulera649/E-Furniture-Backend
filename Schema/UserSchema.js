const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UserSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true
    },
    roleId: {
        type: Schema.Types.ObjectId,
        ref: 'role'
    },
    gender: {
        type: String
    },
    contactnum: {
        type: Number
    }
}, {
    timestamps: true
})
//create model of mongoose for userSchema
// mongoose.model('users',UserSchema)
// module.exports = UserSchema
module.exports = mongoose.model('user', UserSchema)