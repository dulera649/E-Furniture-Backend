const SubCategorySchema = require('../Schema/SubCatSchema')

const addSubCategory = (req, res) => {

    const SubCategory = new SubCategorySchema(req.body)
    SubCategory.save((err, data) => {
        if (err) {
            res.status(500).json({
                message: "error in adding category",
            })
        }
        else {
            res.status(201).json({
                message: "SubCategory added succesfully",
                date: data
            })
        }
    })
}

const getAllSubCategory = (req, res) => {

    SubCategorySchema.find((err, data) => {
        if (err) {
            res.status(404).json9({
                message: "error in fetching data"
            })
        }
        else {
            res.status(200).json({
                message: "data fetched successfully",
                data: data
            })
        }
    })
}

module.exports = {
    addSubCategory,
    getAllSubCategory
}