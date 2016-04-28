//create the module
var app = angular.module('app', ['ngRoute', 'angular-click-outside']);

//configure routes
app.config(function($routeProvider){
    $routeProvider
        .when('/', {
                templateUrl: 'modules/home/home.html'
        })
        .when('/profile', {
                templateUrl: 'modules/favorite/favorite.html',
                controller: 'favoriteController'
        })
        .when('/404', {
                templateUrl: 'modules/error.html'
        })
        .when('/search/:query', {
                templateUrl: 'modules/search/search.html',
                controller:'searchController'
        })
        .when('/details/:ASIN', {
                templateUrl: 'modules/show_details/show_details.html',
                controller: 'showDetailsController'
        })
        .otherwise({
                redirectTo: '/404'
        });
});


angular.module('app').controller('mainController', ['$scope', '$http', '$location', '$window', function( $scope, $http, $location, $window){
    
    $scope.results = [];
    $scope.close = 'false';
    $scope.$watch('$scope.query', function(value){
        if(value){
            $scope.close = 'false';
            var filtered = value.replace(/ /g, '+');
            $http.get('http://api.tvmaze.com/search/shows?q='+filtered)
                .then(function(data){
                    console.log(data);
                    $scope.results = data.data.slice(0, 3);
                },
                function(){
                    $scope.results = [];
                });
            }
        else{
            $scope.results = [];
        }
     });

    $scope.closeThis = function () {
        $scope.close = 'true';
    }
    $scope.openThis = function() {
        $scope.close = 'false';
    }

    $scope.onPage = function(page) {
        return $location.path() == "/" + page;
    }

}]);