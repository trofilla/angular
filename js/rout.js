var exampleApp = angular.module("exampleApp", ["ngRoute", "ngAnimate", "uiGmapgoogle-maps", "ngTouch"])
.config(function ($routeProvider, $locationProvider) {

    $locationProvider.html5Mode(true);

    $routeProvider.when("/", {
        templateUrl: "/src/home.html"
    });

    $routeProvider.when("/home", {
        templateUrl: "../src/home.html"
    });

    $routeProvider.when("/blog", {
        templateUrl: "../src/blog.html"
    });

    $routeProvider.when("/features", {
        templateUrl: "../src/features.html"
    });

    $routeProvider.when("/contacts", {
        templateUrl: "../src/contacts.html"
    });

})
.controller("defaultCtrl", function ($scope, $location) {

    $scope.goToView1 = function () {
        $location.path("/home");
    }

    $scope.goToView2 = function () {
        $location.path("/blog");
    }

    $scope.goToView3 = function () {
        $location.path("/features");

    }

    $scope.goToView4 = function () {
        $location.path("/contacts");
    }
  
})
