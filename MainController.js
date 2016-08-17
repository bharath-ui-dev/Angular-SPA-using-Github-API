(function() {

    var app = angular.module("githubViewer");

    var MainController = function($scope, $location) {
        $scope.search = function(username) {
            $location.path("/user/" + username);
        };

        $scope.username = "angular";
    };

    app.controller("MainController", MainController);

}());