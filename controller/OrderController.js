const orderSchema = require('../Schema/OrderSchema')

const getOrderWith = (req, res) => {


    orderSchema.find().populate('user').populate('status').populate('address').exec((err, order) => {
        if (err) {
            res.status(500).json({
                message: "Error in getting order",
                err: err
            })
        }
        else {
            if (order != null || order != undefined || order.length != 0) {
                res.status(200).json({
                    message: "order fetched successfully",
                    order: order
                })
            }
            else {
                res.status(404).json({
                    message: "order not found",
                })
            }

        }

    })




}



const updateOrder = (req, res) => {

    const id = req.params.id

    orderSchema.findByIdAndUpdate(id, req.body, (err, success) => {


        if (err) {
            res.status(500).json({
                message: "Error in updating order",
                err: err
            })
        }
        else {
            if (success != null || success != undefined) {
                res.status(200).json({
                    message: "order updated successfully",
                })
            }
            else {
                res.status(404).json({
                    message: "order not found",
                })
            }



        }


    })



}



const deleteOrder = (req, res) => {
    const id = req.params.id

    orderSchema.findByIdAndDelete(id, (err, order) => {

        if (err) {
            res.status(500).json({
                message: "Error in deleting order",
                err: err
            })
        }
        else {
            if (order != null || order != undefined) {
                res.status(200).json({
                    message: "order deleted successfully",
                    order: order
                })
            }
            else {
                res.status(404).json({
                    message: "order not found",
                })
            }
        }


    })




}

const getOrderById = (req, res) => {

    const id = req.params.id
    orderSchema.findById(id, (err, order) => {

        if (err) {
            res.status(500).json({
                message: "Error in getting order",
                err: err
            })
        }
        else {

            if (order != null || order != undefined) {
                res.status(200).json({
                    message: "order fetched successfully",
                    order: order
                })
            }
            else {
                res.status(404).json({
                    message: "order not found",
                })
            }



        }



    })


}

const getAllOrder = (req, res) => {

    orderSchema.find((err, order) => {

        if (err) {
            res.status(500).json({
                message: "Error in getting products",
                err: err
            })
        }
        else {
            if (order != null || order != undefined || order.length != 0) {
                res.status(200).json({
                    message: "Products fetched successfully",
                    order: order
                })
            }
            else {
                res.status(404).json({
                    message: "Order not found",
                })
            }

        }

    })


}


const addOrder = (req, res) => {

    const order = new orderSchema(req.body)
    order.save((err, data) => {

        if (err) {
            res.status(500).json({
                message: "Error in saving Order",
                err: err
            })
        }
        else {
            res.status(201).json({
                message: "Order saved successfully",
                data: data
            })
        }


    })
}

module.exports = {
    addOrder,
    getAllOrder,
    getOrderById,
    deleteOrder,
    updateOrder,
    getOrderWith
}