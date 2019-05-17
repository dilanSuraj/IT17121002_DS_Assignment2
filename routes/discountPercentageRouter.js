const DiscountPaymentController = require('../controller/discountController');
const express = require('express');
var router = express.Router();

//POST method will call the insert method in userController

router.get('/',function (req, res) {

    // var discountAmt = DiscountPaymentController.isGovernmentEmployee();
    // var status = "200";
    // res.status(status).send({
    //         message: discountAmt
    //     });

    DiscountPaymentController.isGovernmentEmployee().then(function (data) {
        res.status(data.status).send(data.data
        );
    }).catch(error => {
        res.status(error.status).send({
            message: error.message
        })
    })


});


module.exports = router;
