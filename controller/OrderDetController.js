const orderdetailsSchema = require('../Schema/OrderDetailsSchema')

const getOrderDetailsWith = (req, res) => {


    orderdetailsSchema.find().populate('order').populate('user').exec((err, orderdetails) => {
        if (err) {
            res.status(500).json({
                message: "Error in getting order details",
                err: err
            })
        }
        else {
            if (orderdetails != null || orderdetails != undefined || orderdetails.length != 0) {
                res.status(200).json({
                    message: "order details fetched successfully",
                    order: order
                })
            }
            else {
                res.status(404).json({
                    message: "order details not found",
                })
            }

        }

    })




}



const updateOrderDetails = (req, res) => {

    const id = req.params.id

    orderdetailsSchema.findByIdAndUpdate(id, req.body, (err, success) => {


        if (err) {
            res.status(500).json({
                message: "Error in updating order details ",
                err: err
            })
        }
        else {
            if (success != null || success != undefined) {
                res.status(200).json({
                    message: "order details updated successfully",
                })
            }
            else {
                res.status(404).json({
                    message: "order details not found",
                })
            }



        }


    })



}



const deleteOrderDetails = (req, res) => {
    const id = req.params.id

    orderdetailsSchema.findByIdAndDelete(id, (err, orderdetails) => {

        if (err) {
            res.status(500).json({
                message: "Error in deleting order details",
                err: err
            })
        }
        else {
            if (orderdetails != null || orderdetails != undefined) {
                res.status(200).json({
                    message: "order details deleted successfully",
                    orderdetails: orderdetails
                })
            }
            else {
                res.status(404).json({
                    message: "order details not found",
                })
            }
        }


    })




}

const getOrderDetailsById = (req, res) => {

    const id = req.params.id
    orderdetailsSchema.findById(id, (err, orderdetails) => {

        if (err) {
            res.status(500).json({
                message: "Error in getting order details",
                err: err
            })
        }
        else {

            if (orderdetails != null || orderdetails != undefined) {
                res.status(200).json({
                    message: "orderdetails fetched successfully",
                    orderdetails: orderdetails
                })
            }
            else {
                res.status(404).json({
                    message: "order details not found",
                })
            }



        }



    })


}

const getAllOrderDetails = (req, res) => {

    orderdetailsSchema.find((err, orderdetails) => {

        if (err) {
            res.status(500).json({
                message: "Error in getting order details",
                err: err
            })
        }
        else {
            if (orderdetails != null || orderdetails != undefined || orderdetails.length != 0) {
                res.status(200).json({
                    message: "order details fetched successfully",
                    orderdetails: orderdetails
                })
            }
            else {
                res.status(404).json({
                    message: "order details not found",
                })
            }

        }

    })


}


const addOrderDetails = (req, res) => {

    const orderdetails = new orderdetailsSchema(req.body)
    orderdetails.save((err, data) => {

        if (err) {
            res.status(500).json({
                message: "Error in saving order details",
                err: err
            })
        }
        else {
            res.status(201).json({
                message: "order details saved successfully",
                data: data
            })
        }


    })
}

module.exports = {
    addOrderDetails,
    getAllOrderDetails,
    getOrderDetailsById,
    deleteOrderDetails,
    updateOrderDetails,
    getOrderDetailsWith
}