const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ProductSchema = new Schema({

    name: {
        type: String,
        required: true
    },
    user:{
        type:Schema.Types.ObjectId,
        ref:'user'
    },
    categoryId: {
        type: Schema.Types.ObjectId,
        ref: 'category'
    },
    subCategoryId: {
        type: Schema.Types.ObjectId,
        ref: 'SubCategory'
    },
    brandId: {
        type: Schema.Types.ObjectId,
        ref: 'Brand'
    },
    file:{
        type:Schema.Types.ObjectId,
        ref:'FileUpload'
    },
    BasePrice: {
        type: Number,
    },
}, {
    timestamps: true
})

module.exports = mongoose.model('product', ProductSchema)