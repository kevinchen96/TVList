angular.module('app').controller('showDetailsController', ['$scope', '$routeParams', '$http', '$window', function( $scope, $routeParams, $http, $window){
    $scope.inFavorites = false;
    $http.get('http://api.tvmaze.com/shows/'+$routeParams.ASIN)
      .then(function(data){
      
        $scope.current = data.data;
        $scope.current.summary = $($scope.current.summary).text();
       
        var check = JSON.parse(localStorage.getItem("favorites"));
    
        if(check){
          for(var i = 0; i < check.length; i++){
            if(check[i].id == $scope.current.id){
              $scope.inFavorites = true;
            }
          }
        }
      });


    $scope.addToFavorites = function(){
      var favorites;
      favorites = JSON.parse(localStorage.getItem("favorites"));
      if(!favorites){
        favorites = [];
      }
      favorites.push($scope.current);
      localStorage.setItem("favorites", JSON.stringify(favorites));
      window.location.href="#/profile";
    }

    $scope.removeFromFavorites = function(){
      var favorites;
      favorites = JSON.parse(localStorage.getItem("favorites"));
      for(var i = 0; i < favorites.length; i++){
        if(favorites[i].id == $scope.current.id){
          favorites.splice(i, 1);
        }
      }
      localStorage.setItem("favorites", JSON.stringify(favorites));
      window.location.href="#/profile";
    }
		
}]);
