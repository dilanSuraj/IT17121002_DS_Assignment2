const CreditCardPaymentController = require('../controller/payCardController');
const express = require('express');
var router = express.Router();

//POST method will call the insert method in userController

router.post('/',function (req, res) {
    CreditCardPaymentController.insert(req.body).then(function (data) {
        res.status(data.status).send({
            message: data.message
        });
    }).catch(error => {
        res.status(error.status).send({
            message: error.message
        });
    })
});


module.exports = router;

