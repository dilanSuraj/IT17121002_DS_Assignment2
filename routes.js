var express = require('express');
var routes = express.Router();

/*
 requires all classes that handle routes
*/

var trainTicketRouter = require('./routes/trainTicketRouter');
var userRouter =  require('./routes/userRouter');
var payCardRouter = require('./routes/payCardRouter');
var payDialogRouter = require('./routes/payDialogRouter');
var discountRouter = require('./routes/discountPercentageRouter');

routes.use('/tickets', trainTicketRouter);
routes.use('/user', userRouter);
routes.use('/creditcard', payCardRouter);
routes.use('/dialogpay', payDialogRouter);
routes.use('/discount', discountRouter);

routes.get('/', (req, res) => {
    res.send('Server is up and running');
});

module.exports = routes;
