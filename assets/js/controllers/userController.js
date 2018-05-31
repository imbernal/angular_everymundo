everyMundo.controller('userController', ['$scope', 'userService', function ($scope,  userService) {


    $scope.currentGender = 'All';

    //This object going to contain all users id was selected
    $scope.selected = {};

    //Init with all my users
    $scope.initAllUsers = function(){
        userService.initAllUsers();
    };

    $scope.users = userService.allUsers();


    //Function to return if there are any element selected to delete
    $scope.elementSelected = function () {
        return Object.values($scope.selected).indexOf(true) > -1 ? false : true;

    };


    $scope.usersGender = function (gender) {

        $scope.currentGender = gender;

        if(gender != "All"){
            $scope.users  = userService.usersGender(gender);
        }else{
            $scope.users = userService.allUsers();
        }
    };


    $scope.deleteUsers = function (user_id) {

        $scope.users = userService.deleteUsers($scope.selected, user_id  , $scope.currentGender);

        if($scope.currentGender != 'All')
            $scope.users = userService.usersGender($scope.currentGender);


    }

}]);
