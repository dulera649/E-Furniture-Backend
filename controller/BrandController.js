const brandSchema = require('../Schema/BrandSchema')

const addBrand = (req, res) => {

    const brand = new brandSchema(req.body)
    brand.save((err, data) => {
        if (err) {
            res.status(500).json({
                message: "error in adding brand",
            })
        }
        else {
            res.status(201).json({
                message: "brand added succesfully",
                date: data
            })
        }
    })
}

const getAllBrand = (req, res) => {

    brandSchema.find((err, data) => {
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
    addBrand,
    getAllBrand
}