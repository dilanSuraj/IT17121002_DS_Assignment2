var mongoose = require('../dbConfig/DBSchema');
var schema = mongoose.model('cart');

var cartController = function(){

    this.insert = function(data){

        return new Promise(function(resolve,reject){
            var cart = schema({
                ID: data.ID,
                trainName:data.trainName,
                total: data.total,
                Date: new Date()
            }) 

            cart.save().then(function(){
                resolve({
                    status: 200,
                    message: "Added a new ticket to cart"
                })
            }).catch(err=>{
                reject({
                    status: 500,
                    message: "Error "+err
                })
            })
        });
    }

    this.deleteOne = (id)=>{
        return new Promise((resolve, reject)=>{
           schema.remove({
               _id:id
           }).exec().then((data) =>{
               resolve({
                   status:200,
                   message:"Deleted"
               })
           }).catch(err =>{
               reject({
                   status: 500,
                   message: "Error "+ err
               })
               
           })
        });
    }
}

module.exports = new cartController();