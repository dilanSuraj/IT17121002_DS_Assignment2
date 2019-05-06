const mongoose = require('../dbConfig/DBSchema');
var userSchema = mongoose.model('user');
/**
 * Handles all user requests based on the user table, this class manipulates data in the user table
 */
var userController = function () {
    /**
     * Insert method insert data into the user table
     */
    this.insert = function (data) {
        return new Promise(function (resolve, reject) {
            var user = new userSchema({
                   name : data.name,
                   email: data.email,
                   password: data.password,
                   address: data.address,
                   mobileNumber: data.mobileNumber,
                   NICNo: data.NICNo
                });

            console.log(user.name);

            user.save().then(() => {
                resolve({
                    status: 200,
                    message: 'Added a user suucessfully'
                })
            }).catch((err) => {
                reject({
                    status: 500,
                    message: 'Error : ' + err
                })
            });
        }).catch(err=>{
            return(console.log(err));
        });
    }
    /**
     * get method to retrieve all data
     */

    this.get = () => {
        return new Promise(function (resolve, reject) {
            userSchema.find().sort({random: 1}).limit(1).exec().then((data) => {
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
    /**
     * getOne method to retrieve data of specified user based on the email and password
     */

    this.getOne = (email,password) => {
        return new Promise(function (resolve, reject) {
            userSchema.find({
                email: email,
                password: password
            }).exec().then((data) => {
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
    /**
     * this method checkmail is used to check whether there is an email already in the db to validate the signup process
     */


    this.checkMail = (email) => {
        return new Promise(function (resolve, reject) {
            userSchema.find({
                email: email
            }).exec().then((data) => {
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
/**
 * Delete an existing user
 */
     this.deleteOne = (id) => {
        return new Promise(function (resolve, reject) {
            userSchema.remove({
               _id: id
            }).exec().then((data) => {
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
    /**
     * User can update their profile
     */

    this.update = (email,data) => {
        var password = JSON.stringify(data.password);
        var name = JSON.stringify(data.name);
        var mobileNumber = JSON.stringify(data.mobileNumber);

        return new Promise(function (resolve, reject) {
            userSchema.update({
               password: password,
               name: name,
               mobileNumber: mobileNumber  
            }).then((data) => {
                resolve({
                    status: 200,
                    message: 'Updated'
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
/**
 * userController() method is exported for the userRouter class's use
 */
module.exports = new userController();