const vendorSchema = require('../Schema/VendorSchema')
const addVendor = (req, res) => {
    const vendor = new vendorSchema(req.body)
    vendor.save((err, data) => {
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
const getAllVendor = (req, res) => {
    vendorSchema.find((err, data) => {
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
const getVendorById = (req, res) => {

    var id = req.params.id

    vendorSchema.findById(id, (err, data) => {
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
const deleteVendor = (req, res) => {

    const id = req.params.id
    vendorSchema.findByIdAndDelete(id, (err, success) => {
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
const updateVendor = (req, res) => {

    const id = req.params.id

    // const user = new userSchema(req.body)
    // user.fi
    vendorSchema.findByIdAndUpdate(id, req.body, (err, success) => {
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
const getVendorDataWith = (req, res) => {

    vendorSchema.find().populate('state').populate('city').populate('user').exec((err, vendor) => {
        if (err) {
            res.status(500).json({
                message: "Error in getting vendor",
                err: err
            })
        }
        else {
            if (vendor != null || vendor != undefined || vendor.length != 0) {
                res.status(200).json({
                    message: "vendor fetched successfully",
                    vendor: vendor
                })
            }
            else {
                res.status(404).json({
                    message: "vendor not found",
                })
            }

        }
    })

}

module.exports = {
    addVendor,
    getAllVendor,
    getVendorById,
    deleteVendor,
    updateVendor,
    getVendorDataWith
}