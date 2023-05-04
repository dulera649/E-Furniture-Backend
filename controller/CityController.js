const citySchema = require('../Schema/CitySchema')

const addCity = (req, res) => {
    const city = new citySchema(req.body)
    city.save((err, data) => {
        if (err) {
            res.status(500).json({
                message: "error in adding city",
            })
        }
        else {
            res.status(201).json({
                message: "city added successfully",
                data: data
            })
        }
    })
}
const getAllCity = (req, res) => {
    citySchema.find((err, data) => {
        if (err) {
            res.status(404).json({
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
const getCityById = (req, res) => {

    var id = req.params.id

    city.findById(id, (err, data) => {
        if (err) {
            res.status(404).json({
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
const deleteCity = (req, res) => {

    const id = req.params.id
    city.findByIdAndDelete(id, (err, success) => {
        if (err) {
            res.status(404).json({
                message: "error in deleting user",
            })
        }
        else {
            res.status(200).json({
                message: "user deleted successfully",
                data: success
            })
        }
    })

}
const updateCity = (req, res) => {

    const id = req.params.id

    // const user = new userSchema(req.body)
    // user.fi
    citySchema.findByIdAndUpdate(id, req.body, (err, success) => {
        if (err) {
            res.status(404).json({
                message: "error in updating user",
            })
        }
        else {
            res.status(200).json({
                message: "user updated successfully",
            })
        }
    })
}
const getCityDataWithState = (req, res) => {

    citySchema.find().populate('state').exec((err, city) => {
        if (err) {
            res.status(500).json({
                message: "Error in getting subcategory",
                err: err
            })
        }
        else {
            if (city != null || city != undefined || city.length != 0) {
                res.status(200).json({
                    message: "city fetched successfully",
                    city: city
                })
            }
            else {
                res.status(404).json({
                    message: "city not found",
                })
            }

        }
    })

}

module.exports = {
    addCity,
    getAllCity,
    getCityById,
    deleteCity,
    updateCity,
    getCityDataWithState
}