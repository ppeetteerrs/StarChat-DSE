var StarChatDSEControllers = angular.module("StarChatDSEControllers", ["StarChatDSE", "StarChatDSEServices", "ngFileUpload", "ngResource", "ngRoute", "pdf", "ionic"]);

StarChatDSEControllers.controller("homeCtrl", ["$scope", function($scope){
}]);

StarChatDSEControllers.controller("aboutCtrl", ["$scope", function($scope){
}]);

StarChatDSEControllers.controller("browseCtrl", ["$scope", "$http", "Fetch", function($scope,$http,Fetch){
  Fetch.list(function(info) {
          $scope.topicinfo = info;
  });
  $scope.searchInput = "";
  $scope.sortType = "year";
  $scope.sortReverse = false;
}]);

StarChatDSEControllers.controller("uploadCtrl", ["$scope", "$resource", "Upload", function($scope , $resource, Upload){
}]);

StarChatDSEControllers.controller("topicCtrl", ["$scope", "$routeParams", "Fetch", "filterFilter", "$sce", function($scope, $routeParams, Fetch, filterFilter, $sce){
  $scope.groupToggle =1;
  $scope.indToggle =0;

  Fetch.list(function(info) {
          $scope.topicinfo = filterFilter(info,$routeParams.question);
          console.log($scope.topicinfo);
  });
  
  $scope.trustSrc = function(src) {
    return $sce.trustAsResourceUrl(src);
  };
  
  var quesYear = $scope.topicinfo[0].year.toString();
  var quesId = $scope.topicinfo[0].questionNumber.toString();
  var url = quesYear + quesId.slice(0,1) + quesId.slice(2,3) + "d";

  console.log(url);
  
  $scope.pdfName = 'Relativity: The Special and General Theory by Albert Einstein';
  $scope.pdfUrl = "/uploads/groupTranscript/" + url + ".pdf";
  $scope.youtubeUrl = $scope.topicinfo[0].groupYoutubeLink;
  
  $scope.topicSelect = function(){
    if($scope.groupToggle == 1){
      url = quesYear + quesId.slice(0,1) + quesId.slice(2,3) + "d";
      $scope.pdfUrl = "/uploads/groupTranscript/" + url + ".pdf";
      $scope.youtubeUrl = $scope.topicinfo[0].groupYoutubeLink;
    };
    if($scope.indToggle == 1){
      url = quesYear + quesId.slice(0,1) + quesId.slice(2,3) + "i";
      $scope.pdfUrl = "/uploads/indTranscript/" + url + ".pdf";
      $scope.youtubeUrl = $scope.topicinfo[0].indYoutubeLink;
    };
  };
  
}]);
  
