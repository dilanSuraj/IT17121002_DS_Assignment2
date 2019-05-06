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
            required: 'User name field cannot be empty'
        },
        price: {
            type: Number,
            required: 'Course Id field cannot be empty'
        },
        departure: {
            type: String,
            trim: true,
            required: 'User name field cannot be empty'
        },
        destination: {
            type: String,
            trim: true,
            required: 'User name field cannot be empty'
        },
        departureTime: {
            type: String,
            trim: true,
            required: 'User name field cannot be empty'
        },
        avaialableQty: {
            type: String,
            trim: true,
            required: 'User name field cannot be empty'
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
            required: 'Course Id field cannot be empty'
        },
        password: {
            type: String,
            trim: true,
            required: 'User name field cannot be empty'
        },
        address: {
            type: String,
            required: 'Course Id field cannot be empty'
        },
        mobileNumber: {
            type: String,
            trim: true,
            required: 'User name field cannot be empty'
        },
        NICNo: {
            type: String,
            trim: true,
            required: 'User name field cannot be empty'
        }

    }
)

/*
Ticket Cart schema
*/

var cart = new schema({
    ID: {
        type: String,
        required: true
    },

    trainName: {
        type: String,
        required: true
    },
    total: {
        type: String,
        required: true
    },
    Date: {
        type: String,
        required: true
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
        }
    }
)
/*
  Credit Card Schema
*/
var CreditCardSchema = new schema(
    {
        name: {
            type: String,
            trim: true,
            required: 'User name field cannot be empty'
        },
        email: {
            type: String,
            trim: true,
            required: 'User name field cannot be empty'
        },
        cardNumber: {
            type: String,
            trim: true,
            required: 'User name field cannot be empty'
        },
        cvc: {
            type: String,
            trim: true,
            required: 'User name field cannot be empty'
        },
        total: {
            type: Number,
            required: 'Course Id field cannot be empty'
        },
        subtotal: {
            type: Number,
            trim: true,
            required: 'User name field cannot be empty'
        }
    }
)

mongoose.model('trainTickets', TrainTicketSchema);
mongoose.model('user', UserSchema);
mongoose.model('cart', cart);
mongoose.model('creditCard', CreditCardSchema);
mongoose.model('dialogPay', MobileCardSchema);

mongoose.connect('mongodb://127.0.0.1:27017/eBookDB', function(err){
    if(err){
        console.log(err);
        process.exit(-1);
    }

    console.log("Connected to the db");
})

module.exports = mongoose;

