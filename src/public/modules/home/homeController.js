angular.module('app').controller('homeController', ['$scope', function($scope){
    $scope.$on('$viewContentLoaded', function() {
        $("#my-thumbs-list").mThumbnailScroller({
                type:"click-50",
                theme:"buttons-in"
            });
    });
}]);