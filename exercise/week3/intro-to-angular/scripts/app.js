var app = angular.module("myApp", []);
app.controller("mainCtrl", ["$scope", function($scope) {

    var el = angular.element(document.querySelector("h1"));
    el.append("!");

    // When a link is clicked, confirm that the user wants to navigate to that url.
    //If the user clicks OK, allow the default behavior of the link to be executed.
    // If the user clicks cancel, cancel the default browser behavior by calling event.preventDefault() on the event object.
    $scope.confirmUrl = function() {
        var routeTo = confirm("Do you want to go this website?");
        if (routeTo === false) {
            event.preventDefault();
            event.target.remove();
        }
    };


}]);
