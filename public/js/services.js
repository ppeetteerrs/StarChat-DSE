var StarChatDSEServices = angular.module("StarChatDSEServices", ["StarChatDSE", "StarChatDSEControllers"]);

StarChatDSEServices.service("Fetch", ["$http", function($http){
    var cachedData;

    function getData(callback){
      if(cachedData) {
        callback(cachedData);
      } else {
        $http.get('./uploads/info.json').success(function(data){
          cachedData = data;
          callback(data);
        });
      }
    }
    return {
        list: getData
    }
}]);