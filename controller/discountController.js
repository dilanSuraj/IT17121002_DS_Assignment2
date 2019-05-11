const UserController = require('./userController');

var discountController = function () {

    this.isGovernmentEmployee = function () {
        var email = "dilan.amarasinghe214263@gmail.com";
        var password = "12345678";

        userController.getOne(email, password).then(function (data) {
            var userDetails = JSON.stringify(data);
            if (userDetails != '[]') {
                for (var user of data) {
                    var NICNo = user.NICNo;
                }
                if(NICNo % 2 == 0){
                    return true;
                }
                return false;
               
           }
        }).catch(error => {
            alert("You are unauthenticated user!");
            console.log("Error " + error);
            return false;
        })
    }

    this.setDiscountPercentage = function(){
        var isGovernment = this.isGovernmentEmployee();
        if(isGovernment){
            console.log("Government");
            return 0.5;
        }

        console.log("NonGovernment")
        return 0;
    }
}

module.exports = new discountController();