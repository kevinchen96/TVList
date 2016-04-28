angular.module('app').controller('favoriteController', ['$scope', '$http', '$routeParams', function($scope, $http, $routeParams){
	$scope.favorites = JSON.parse(localStorage.getItem("favorites"));
    console.log($scope.favorites);
}]);