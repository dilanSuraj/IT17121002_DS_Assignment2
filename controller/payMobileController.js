const mongoose = require('../dbConfig/DBSchema');
const schema = mongoose.model('dialogPay');
var nodemailer = require('nodemailer');

var MobilePayController = function () {
    this.insert = function (data) {
        return new Promise(function (resolve, reject) {
            let creditCardPayment = new schema({
                phone: data.phone,
                email: data.email,
                pin: data.pin,
                total: data.total,
                subtotal: data.subtotal
            });


            // schema.save().then(() => {
            //     resolve({
            //         status: 200,
            //         message: 'Added a mobile Card payment added suucessfully'
            //     })
            // }).catch((err) => {
            //     reject({
            //         status: 500,
            //         message: 'Error : ' + err
            //     })
            // });

            // var output =
            //     `<b>E - Train Book</b>
            //     <p>Dear Sir/Madam, We recieved your payment of ${data.subtotal} LKR.
            //     Thank you for using our service</p>`;

            // let transporter = nodemailer.createTransport({
            //     service: 'gmail',
            //     secure: false,
            //     port: 25,
            //     auth: {
            //         user:'etrainbook@gmail.com',
            //         pass: 'etrainbook123'
            //     },
            //     tls:{
            //         rejectUnauthorized:false
            //     }
            // });

            // let mailOptions = {
            //     from: '"E-Train Book" <etrainbook@gmail.com>',
            //     to: data.email,
            //     subject: 'Payment Confirmation',
            //     text: 'Hello',
            //     html: output
            // };

            // transporter.sendMail(mailOptions,(err,info)=>{
            //     if(err){
            //         return console.log(err);
            //     }
            //     console.log('Message sent: '+ info.messageId);
            //     console.log('Preview URL: '+ nodemailer.getTestMessageUrl(info));

            // });

            const accountSid = 'ACb6ed39fdaf4b52f9468ff929447bbf8a';
            const authToken = 'f060e7b7f8cdd4d547831a871e7f8dd6';
            const client = require('twilio')(accountSid, authToken);

            client.messages
                .create({
                    body: 'This is the ship that made the Kessel Run in fourteen parsecs?',
                    from: '+14093163978',
                    to: '+94754494954'
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