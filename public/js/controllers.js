var StarChatDSEControllers = angular.module("StarChatDSEControllers", ["StarChatDSE", "ngFileUpload", "ngResource", "firebase"]);

StarChatDSEControllers.controller("browseCtrl", ["$scope", "$http", function($scope,$http){
  $http.get('./uploads/info.json').success(function(data) {
    $scope.topicinfo = data;
    console.log(data);
  });
}]);

StarChatDSEControllers.controller("uploadCtrl", ["$scope", "$resource", "Upload", function($scope , $resource, Upload){
}]);