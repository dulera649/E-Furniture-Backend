const stateSchema = require('../Schema/StateSchema')
const addState = (req, res) => {
    const state = new stateSchema(req.body)
    state.save((err, data) => {
        if (err) {
            res.status(500).json({
                message: "error in adding state",
            })
        }
        else {
            res.status(201).json({
                message: "state added successfully",
                data: data
            })
        }
    })
}
const getAllState = (req, res) => {
    stateSchema.find((err, data) => {
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
const getStateById = (req, res) => {

    var id = req.params.id

    stateSchema.findById(id, (err, data) => {
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
const deleteState = (req, res) => {

    const id = req.params.id
    stateSchema.findByIdAndDelete(id, (err, success) => {
        if (err) {
            res.status(404).json({
                message: "error in deleting state",
            })
        }
        else {
            res.status(200).json({
                message: "state deleted successfully",
                data: success
            })
        }
    })

}
const updateState = (req, res) => {

    const id = req.params.id

    // const user = new userSchema(req.body)
    // user.fi
    stateSchema.findByIdAndUpdate(id, req.body, (err, success) => {
        if (err) {
            res.status(404).json({
                message: "error in updating state",
            })
        }
        else {
            res.status(200).json({
                message: "state updated successfully",
            })
        }
    })
}


module.exports = {
    addState,
    getAllState,
    getStateById,
    deleteState,
    updateState
}