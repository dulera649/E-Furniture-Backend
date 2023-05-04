const statusSchema = require('../Schema/StatusSchema')
const addStatus = (req, res) => {
    const status = new statusSchema(req.body)
    status.save((err, data) => {
        if (err) {
            res.status(500).json({
                message: "error in adding status",
            })
        }
        else {
            res.status(201).json({
                message: "status added successfully",
                data: data
            })
        }
    })
}
const getAllStatus = (req, res) => {
    statusSchema.find((err, data) => {
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
const getStatusById = (req, res) => {

    var id = req.params.id

    statusSchema.findById(id, (err, data) => {
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
const deleteStatus = (req, res) => {

    const id = req.params.id
    statusSchema.findByIdAndDelete(id, (err, success) => {
        if (err) {
            res.status(404).json({
                message: "error in deleting status",
            })
        }
        else {
            res.status(200).json({
                message: "status deleted successfully",
                data: success
            })
        }
    })

}
const updateStatus = (req, res) => {

    const id = req.params.id

    // const user = new userSchema(req.body)
    // user.fi
    statusSchema.findByIdAndUpdate(id, req.body, (err, success) => {
        if (err) {
            res.status(404).json({
                message: "error in updating status",
            })
        }
        else {
            res.status(200).json({
                message: "status updated successfully",
            })
        }
    })
}


module.exports = {
    addStatus,
    getAllStatus,
    getStatusById,
    deleteStatus,
    updateStatus
}