everyMundo.controller('userController',['$scope', 'userService', function ($scope, userService) {

    $scope.sortKey = 'id';

    //Init with all my users
    $scope.users = userService.allUsers();

    //This object going to contain all users id was selected
    $scope.selected = {};


    //Function to return if there are any element selected to delete
    $scope.elementSelected = function(){
      return Object.values($scope.selected).indexOf(true) > -1 ? false : true;

  }

    $scope.sort = function(keyname){
        $scope.sortKey = keyname;
        $scope.reverse = !$scope.reverse;
    }


    $scope.showFemale = function(gender){

        $scope.users = gender != "All" ? userService.usersFemale(gender) : userService.allUsers();

    };


    $scope.deleteUsers = function(user_id){

        $scope.users = userService.deleteUsers($scope.selected , user_id);
    }

}]);
