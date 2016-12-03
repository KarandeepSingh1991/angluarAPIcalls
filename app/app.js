angular.module('myapp', ['ui.bootstrap']).controller('NewsController', function ($scope, $http) {
    $scope.$watch('moviename', function () {
        fetch();
    });
    $scope.$watch('actorname', function () {
        fetch();
    });
    $scope.moviename = "rustom";
    $scope.actorname = "nawaz";
    
    function fetch() {
        $scope.moviedata = [];
        $http.get("https://api.cinemalytics.com/v1/movie/title/?value=" + $scope.moviename + "&auth_token=9EDAFA08589DF1B4F58A82FB9B2B31D5")
        .then(function (response) {
            $scope.moviedata = response.data;
            
            $http.get("https://api.cinemalytics.com/v1/actor/name/" + $scope.actorname + "?auth_token=9EDAFA08589DF1B4F58A82FB9B2B31D5")
                    .then(function (response) {
                            $scope.actor = response.data;
                    })
            });

    }
});