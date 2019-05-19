const mongoose = require('../dbConfig/DBSchema');
const trainTicketSchema = mongoose.model('trainTickets');

var trainTicketController = function () {
    this.insert = function (data) {
        return new Promise(function (resolve, reject) {
            let trainTicket = new trainTicketSchema({
                trainName:data.trainName,
                ticketId:data.ticketId,
                price:data.price,
                start:data.start,
                destination:data.destination,
                arrivalTime:data.arrivalTime,
                departureTime:data.departureTime,
                avaialableQty:data.avaialableQty,
                ticketClass:data.ticketClass
            });

        
            trainTicket.save().then(() => {
                resolve({
                    status: 200,
                    message: 'Added a trainTicket suucessfully'
                })
            }).catch((err) => {
                reject({
                    status: 500,
                    message: 'Error : ' + err
                })
            });
        })
    }

    this.update = function (data) {

        console.log(data.availableQty);
        return new Promise(function (resolve, reject) {
        
            
            trainTicketSchema.update({ticketId:data.ticketId},{$set:{avaialableQty : data.availableQty}}).then(() => {
                resolve({
                    status: 200,
                    message: 'Added a trainTicket suucessfully'
                })
            }).catch((err) => {
                reject({
                    status: 500,
                    message: 'Error : ' + err
                })
            });
        })
    }

    this.get = () => {
        return new Promise(function (resolve, reject) {
            trainTicketSchema.find().exec().then((data) => {
                resolve({
                    status: 200,
                    data: data
                })
            }).catch((err) => {
                reject({
                    status: 500,
                    message: 'Error : ' + err
                })
            })
        })
    }

    this.getOne = (Id) => {
        return new Promise(function (resolve, reject) {
            trainTicketSchema.find({
                ticketId: Id
            }).exec().then((data) => {
                resolve({
                    status: 200,
                    data: data
                });
                
               
            }).catch((err) => {
                reject({
                    status: 500,
                    message: 'Error : ' + err
                })
            })
        })
    }

    this.getTicketByTrainName = (trainName) => {
        console.log(trainName);
        var trainName = new RegExp(["^", trainName, "$"].join(""), "i");
        return new Promise(function (resolve, reject) {
            trainTicketSchema.find({
                trainName: trainName
            }).then((data) => {
                resolve({
                    status: 200,
                    data: data
                })
            }).catch((err) => {
                reject({
                    status: 500,
                    message: 'Error : ' + err
                })
            })
        })
    }

     this.delete = (id) => {
        return new Promise(function (resolve, reject) {
            trainTicketSchema.remove({
               _id: id
            }).exec().then(() => {
                resolve({
                    status: 200,
                    message: 'Deleted'
                })
            }).catch((err) => {
                reject({
                    status: 500,
                    message: 'Error : ' + err
                })
            })
        })
    }
}

module.exports = new trainTicketController();