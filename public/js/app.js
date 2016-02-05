var app = angular.module("StarChatDSE", ["StarChatDSEControllers", "ngRoute", "ngFileUpload", "firebase"]);

app.config(["$routeProvider", "$locationProvider", function($routeProvider, $locationProvider){
    $routeProvider.when("/home", {templateUrl: "/partials/home.html", controller: "homeCtrl"});
    $routeProvider.when("/browse", {templateUrl: "/partials/browse.html", controller: "browseCtrl"});
    $routeProvider.when("/download", {templateUrl: "/partials/download.html", controller: "downloadCtrl"});
    $routeProvider.when("/about", {templateUrl: "/partials/about.html", controller: "aboutCtrl"});
    $routeProvider.when("/upload", {templateUrl: "/partials/upload.html", controller: "uploadCtrl"});
    $routeProvider.otherwise({redirectTo: "/home"});
    $locationProvider.html5Mode({enabled: true, requireBase: false});
}]);

app.controller("homeCtrl", ["$scope", function($scope){
   $scope.name = "Peter";
}]);

app.controller("aboutCtrl", ["$scope", function($scope){
   $scope.name = "Peter";
}]);