everyMundo.controller('userController', ['$scope', 'userService', function ($scope, userService) {

    $scope.sortKey = 'id';

    //Init with all my users

    userService.allUsers().then(function (data) {
        $scope.users = data;
    });


    //This object going to contain all users id was selected
    $scope.selected = {};


    //Function to return if there are any element selected to delete
    $scope.elementSelected = function () {
        return Object.values($scope.selected).indexOf(true) > -1 ? false : true;

    };

    $scope.sort = function (keyname) {
        $scope.sortKey = keyname;
        $scope.reverse = !$scope.reverse;
    };


    $scope.showFemale = function (gender) {

        if(gender != "All"){
            userService.usersFemale(gender).then(function (data) {
                $scope.users = data;
            });
        }
    };


    $scope.deleteUsers = function (user_id) {

        userService.deleteUsers($scope.selected, user_id).then(function(data){
            $scope.users = data;
        });
    }

}]);
