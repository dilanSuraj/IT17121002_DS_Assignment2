var mongoose = require('mongoose');
var schema = mongoose.Schema;
/*
   Train Tickets schema
*/

var TrainTicketSchema = new schema(
    {
        trainName: {
            type: String,
            trim: true,
            required: 'User name field cannot be empty'
        },
        ticketId: {
            type: String,
            trim: true,
            required: 'Ticket Id field cannot be empty'
        },
        ticketClass:{
            type: String,
            trim: true
        },
        price: {
            type: String,
            required: 'Price field cannot be empty'
        },
        start: {
            type: String,
            trim: true,
            required: 'Start place field cannot be empty'
        },
        destination: {
            type: String,
            trim: true,
            required: 'Destination field cannot be empty'
        },
        arrivalTime: {
            type: String,
            trim: true,
            required: 'Arrival Time field cannot be empty'
        },
        departureTime: {
            type: String,
            trim: true,
            required: 'Departure Time field cannot be empty'
        },
        avaialableQty: {
            type: Number,
            trim: true,
            required: 'Available Qty field cannot be empty'
        }
    }
)
/*
   User schema
*/
var UserSchema = new schema(
    {
        name: {
            type: String,
            trim: true,
            required: 'User name field cannot be empty'
        },
        email: {
            type: String,
            required: 'Email field cannot be empty'
        },
        password: {
            type: String,
            trim: true,
            required: 'User name field cannot be empty'
        },
        address: {
            type: String,
            required: 'Password field cannot be empty'
        },
        mobileNumber: {
            type: String,
            trim: true,
            required: 'Mobile Number field cannot be empty'
        },
        NICNo: {
            type: String,
            trim: true,
            required: 'NIC No field cannot be empty'
        }

    }
)

/*
   Dialog Schema
*/

var MobileCardSchema = new schema(
    {
        phone: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true
        },
        pin: {
            type: String,
            required: true
        },
        total: {
            type: Number,
            required: true
        },
        subtotal: {
            type: Number,
            required: true
        },
        bookingDate:{
            type: String
        }
    }
)
/*
  Credit Card Schema
*/
var CreditCardSchema = new schema(
    {
        
        email: {
            type: String,
            trim: true,
            required: 'Email field cannot be empty'
        },
        cardNumber: {
            type: String,
            trim: true,
            required: 'Card number field cannot be empty'
        },
        cvc: {
            type: String,
            trim: true,
            required: 'Cvc field cannot be empty'
        },
        total: {
            type: Number,
            required: 'Total field cannot be empty'
        },
        subtotal: {
            type: Number,
            trim: true,
            required: 'Sub total field cannot be empty'
        },
         bookingDate:{
            type: String
        }
    }
)

mongoose.model('trainTickets', TrainTicketSchema);
mongoose.model('user', UserSchema);
mongoose.model('creditCard', CreditCardSchema);
mongoose.model('dialogPay', MobileCardSchema);

mongoose.connect('mongodb://127.0.0.1:27017/eTrainBook', function(err){
    if(err){
        console.log(err);
        process.exit(-1);
    }

    console.log("Connected to the db");
})

module.exports = mongoose;

