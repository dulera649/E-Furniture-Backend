const venproSchema = require('../Schema/VenProSchema')

const addVenPro = (req, res) => {
    const venpro = new venproSchema(req.body)
    venpro.save((err, data) => {
        if (err) {
            res.status(500).json({
                message: "error in adding vendor",
            })
        }
        else {
            res.status(201).json({
                message: "vendor added successfully",
                data: data
            })
        }
    })
}
const getAllVenPro = (req, res) => {
    venproSchema.find((err, data) => {
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
const getVenProById = (req, res) => {

    var id = req.params.id

    venproSchema.findById(id, (err, data) => {
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
const deleteVenPro = (req, res) => {

    const id = req.params.id
    venproSchema.findByIdAndDelete(id, (err, success) => {
        if (err) {
            res.status(404).json({
                message: "error in deleting vendor product",
            })
        }
        else {
            res.status(200).json({
                message: "vendor product deleted successfully",
                data: success
            })
        }
    })

}
const updateVenPro = (req, res) => {

    const id = req.params.id

    // const user = new userSchema(req.body)
    // user.fi
    venproSchema.findByIdAndUpdate(id, req.body, (err, success) => {
        if (err) {
            res.status(404).json({
                message: "error in updating vendor product",
            })
        }
        else {
            res.status(200).json({
                message: "vendor product updated successfully",
            })
        }
    })
}
const getVenProDataWith = (req, res) => {

    venproSchema.find().populate('productId').populate('vendorId').populate({
        path:'productId',
        populate:{
            path:'file'
        }
    }).exec((err, users) => {
        if (err) {
            res.status(500).json({
                message: "Error in getting users",
                err: err.name
            })
        }
        else {
            if (users != null || users != undefined || users.length != 0) {
                res.status(200).json({
                    message: "Users fetched successfully",
                    users: users
                })
            }
            else {
                res.status(404).json({
                    message: "Users not found",
                })
            }

        }
    })

}

module.exports = {
    addVenPro,
    getAllVenPro,
    getVenProById,
    deleteVenPro,
    updateVenPro,
    getVenProDataWith
}