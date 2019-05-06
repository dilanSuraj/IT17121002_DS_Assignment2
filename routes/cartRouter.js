var cartController = require('../controller/cartController');
var express = require('express');
var router = express.Router();

router.post('/', function(req, res){
   cartController.insert(req.body).then(function(data){
       res.status(data.status).send({
           message: data.message
       });
   }).catch(
       err=>{
          res.status(err.status).send({
           message: err.message
       });
       }
   )
});

router.delete('/', function(req, res){
   cartController.deleteOne(req.params.id).then(function(data){
       res.status(data.status).send({
           data: data.data
       });
   }).catch(
       err=>{
          res.status(err.status).send({
           message: err.message
       });
       }
   )
});

module.exports = router;
