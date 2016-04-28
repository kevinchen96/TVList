angular.module('app').controller('searchController', ['$scope', '$http', '$routeParams', function($scope, $http, $routeParams){

	$scope.search = [];
	$scope.searchquery = $routeParams.query;
	$http.get('http://api.tvmaze.com/search/shows?q='+$routeParams.query)
        .then(function(data){
            console.log(data);
            $scope.search = data.data;
        },
        function(){
            $scope.search = [];
        });
}]);