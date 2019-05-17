const UserController = require('./userController');

var discountController = function () {

    this.isGovernmentEmployee = function () {
        var email = "dilan.amarasinghe214263@gmail.com";
        var password = "12345678";

        // UserController.getOne(email, password).then(function (data) {
        //     var userDetails = JSON.stringify(data);

        //     if (userDetails != '[]') {

        //         for (var user of data.data) {
        //             var NICNo = user.NICNo;
        //             console.log(user);
        //         }
        //         var NICNo_extracted = NICNo.substring(0, 9);

        //         if (NICNo_extracted % 2 == 0) {
        //             console.log("Government");
        //             return 0.5;
        //         }
        //         else {
        //             console.log("NonGovernment")
        //             return 0;
        //         }

        //     }
        // }).catch(error => {

        //     console.log("Error " + error);
        //     return 0;
        // })

        return new Promise(function (resolve, reject) {
            UserController.getOne(email, password).then(function (data) {
                var userDetails = JSON.stringify(data);

                if (userDetails != '[]') {

                    for (var user of data.data) {
                        var NICNo = user.NICNo;
                        console.log(user);
                    }
                    var NICNo_extracted = NICNo.substring(0, 9);

                    if (NICNo_extracted % 2 == 0) {
                        resolve({
                            status: 200,
                            data: {
                                discountAmt: 0.5,
                                employeeStatus: "Government"
                            }
                        })

                    }
                    else {
                        resolve({
                            status: 200,
                            data: {
                                discountAmt: 0,
                                employeeStatus: "Non - Government"
                            }
                        })
                    }

                }
            }).catch((err) => {
                reject({
                    status: 500,
                    message: 'Error : ' + err
                })
            })
        })
    }
}

module.exports = new discountController();