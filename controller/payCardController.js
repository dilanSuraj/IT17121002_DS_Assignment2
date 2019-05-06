const mongoose = require('../dbConfig/DBSchema');
const creditCardPaySchema = mongoose.model('creditCard');
var nodemailer = require('nodemailer');

var CreditCardPayController = function () {

    this.insert = function (data) {
        return new Promise(function (resolve, reject) {
            var creditCardPayment = new creditCardPaySchema({
                  name: data.name,
                  email:data.email,
                  cardNumber:data.cardNumber,
                  cvc:data.cvc,
                  total:data.total,
                  subtotal:data.subtotal
            })

        
            creditCardPayment.save().then(function(){
                resolve({status: 200,message: 'Added a credit Card payment added suucessfully'});
            }).catch((err) => {
                reject({status: err.status,message: 'Error : ' + err});
            });

            var output =
                `<b>E - Train Book</b>
                <p>Dear Sir/Madam, We recieved your payment of ${data.subtotal} LKR.
                Thank you for using our service</p>`;

            let transporter = nodemailer.createTransport({
                service: 'gmail',
                secure: false,
                port: 25,
                auth: {
                    user:'etrainbook123@gmail.com',
                    pass: 'etrainbook123456'
                },
                tls:{
                    rejectUnauthorized:false
                }
            });

            let mailOptions = {
                from: '"E-Train Book" <etrainbook123@gmail.com>',
                to: data.email,
                subject: 'Payment Confirmation',
                text: 'Hello',
                html: output
            };

            transporter.sendMail(mailOptions,(err,info)=>{
                if(err){
                    return console.log(err);
                }
                console.log('Message sent: '+ info.messageId);
                console.log('Preview URL: '+ nodemailer.getTestMessageUrl(info));

            });
        }).catch(err=>{
            return console.log(err);
        })
    }

}

module.exports = new CreditCardPayController();