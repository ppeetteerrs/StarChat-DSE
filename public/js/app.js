var app = angular.module("StarChatDSE", ["StarChatDSEControllers", "StarChatDSEServices", "ngRoute", "ngFileUpload", "youtube-embed"]);

app.config(["$routeProvider", "$locationProvider", function($routeProvider, $locationProvider){
    $routeProvider.when("/", {templateUrl: "/partials/home.html", controller: "homeCtrl"});
    $routeProvider.when("/browse", {templateUrl: "/partials/browse.html", controller: "browseCtrl"});
    $routeProvider.when("/download", {templateUrl: "/partials/download.html", controller: "downloadCtrl"});
    $routeProvider.when("/about", {templateUrl: "/partials/about.html", controller: "aboutCtrl"});
    $routeProvider.when("/upload", {templateUrl: "/partials/upload.html", controller: "uploadCtrl"});
    $routeProvider.when("/topic/:year/:id/:question", {templateUrl: "/partials/topic.html", controller: "topicCtrl"});
    $routeProvider.otherwise({redirectTo: "/"});
    $locationProvider.html5Mode({enabled: true, requireBase: false});
}]);