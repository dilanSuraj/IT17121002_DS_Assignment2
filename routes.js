var express = require('express');
var routes = express.Router();

/*
 requires all classes that handle routes
*/

var trainTicketRouter = require('./routes/trainTicketRouter');
var userRouter =  require('./routes/userRouter');
var cartRouter = require('./routes/cartRouter');
var payCardRouter = require('./routes/payCardRouter');
var payDialogRouter = require('./routes/payDialogRouter');

routes.use('/tickets', trainTicketRouter);
routes.use('/user', userRouter);
routes.use('/cart', cartRouter);
routes.use('/creditcard', payCardRouter);
routes.use('/dialogpay', payDialogRouter);

module.exports = routes;
