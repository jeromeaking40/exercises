angular.module("myApp").controller("mainCtrl", MainController);

function MainController() {
    var main = this;
    console.log("Testing the Controller");

    main.solid = false;
    main.solidify = function() {
        main.solid = !main.solid;
    };



    main.userProfile = {
        name: "",
        bio: "",
        books: "",
        library: ""
    };


}
