const mongoose = require('../dbConfig/DBSchema');
const schema = mongoose.model('dialogPay');
var nodemailer = require('nodemailer');

var MobilePayController = function () {
    this.insert = function (data) {
        return new Promise(function (resolve, reject) {
            let mobilePayment = new schema({
                phone: data.mobileNumber,
                email: data.email,
                pin: data.pin,
                total: data.total,
                subtotal: data.subTotal
            });

            const accountSid = 'ACb6ed39fdaf4b52f9468ff929447bbf8a';
            const authToken = 'f060e7b7f8cdd4d547831a871e7f8dd6';
            const client = require('twilio')(accountSid, authToken);
            var output =
                `E - Train Book
                Dear Sir/Madam, We recieved your payment of ${mobilePayment.total} LKR.
                Thank you for using our service`;
            

            client.messages
                .create({
                    body: output,
                    from: '+14093163978',
                    to: mobilePayment.phone
                })
                .then(message => console.log(message.sid)).catch(err => {
            return console.log(err);
        })
        }).catch(err => {
            return console.log(err);
        })
    }

}

module.exports = new MobilePayController();