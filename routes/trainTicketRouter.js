const trainTicketController = require('../controller/trainTicketsController');
const express = require('express');
var router = express.Router();

//POST method will call the insert method in userController

router.route('/').post(function (req, res) {
    trainTicketController.insert(req.body).then(function (data) {
        res.status(data.status).send({
            message: data.message
        });
    }).catch(error => {
        res.status(error.status).send({
            message: error.message
        })
    })
});

router.route('/').put(function (req, res) {
    trainTicketController.update(req.body).then(function (data) {
        res.status(data.status).send({
            message: data.message
        });
    }).catch(error => {
        res.status(error.status).send({
            message: error.message
        })
    })
});

router.route('/').get(function (req, res) {
    trainTicketController.get().then(function (data) {
        res.status(data.status).send(data.data
        );
    }).catch(error => {
        res.status(error.status).send({
            message: error.message
        })
    })
});

router.route('/:ticketId').get(function (req, res) {
    trainTicketController.getOne(req.params.ticketId).then(function (data) {
        
        res.status(data.status).send(
           data.data
        );
        
        
    }).catch(error => {
        
        res.status(error.status).send({
            message: error.message
        })
    }

    )
});

router.route('/:ticketId').delete(function (req, res) {
    trainTicketController.delete(req.params.id).then(function (data) {
        res.status(data.status).send(
            {
                data: data.message
            }
        );
    }).catch(error => {
        res.status(error.status).send({
            message: error.message
        })
    })
});

module.exports = router;
