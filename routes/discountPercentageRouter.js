const DiscountPaymentController = require('../controller/discountController');
const express = require('express');
var router = express.Router();

//POST method will call the insert method in userController

router.post('/',function (req, res) {

    var discountAmt = DiscountPaymentController.setDiscountPercentage();
    var status = "200";
    res.status(status).send({
            message: discountAmt
        });
});


module.exports = router;
