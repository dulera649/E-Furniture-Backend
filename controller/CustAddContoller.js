const custaddSchema = require('../Schema/CustAddSchema')

const addCustAdd = (req, res) => {
    const custadd = new custaddSchema(req.body)
    custadd.save((err, data) => {
        if (err) {
            res.status(500).json({
                message: "error in adding custadd",
            })
        }
        else {
            res.status(201).json({
                message: "custadd added successfully",
                data: data
            })
        }
    })
}
const getAllCustAdd = (req, res) => {
    custaddSchema.find((err, data) => {
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
const getCustAddById = (req, res) => {

    var id = req.params.id

    custaddSchema.findById(id, (err, data) => {
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
const deleteCustAdd = (req, res) => {

    const id = req.params.id
    custaddSchema.findByIdAndDelete(id, (err, success) => {
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
const updateCustAdd = (req, res) => {

    const id = req.params.id

    // const user = new userSchema(req.body)
    // user.fi
    custaddSchema.findByIdAndUpdate(id, req.body, (err, success) => {
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
const getCustAddDataWith = (req, res) => {

    custaddSchema.find().populate('user').populate('state').populate('city').exec((err, custadd) => {
        if (err) {
            res.status(500).json({
                message: "Error in getting custadd",
                err: err
            })
        }
        else {
            if (custadd != null || custadd != undefined || custadd.length != 0) {
                res.status(200).json({
                    message: "custadd fetched successfully",
                    custadd: custadd
                })
            }
            else {
                res.status(404).json({
                    message: "custadd not found",
                })
            }

        }
    })

}

module.exports = {
    addCustAdd,
    getAllCustAdd,
    getCustAddById,
    deleteCustAdd,
    updateCustAdd,
    getCustAddDataWith
}