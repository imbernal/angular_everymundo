everyMundo.controller('userController', ['$scope', 'userService' , 'Constants', function ($scope,  userService , Constants) {

    $scope.title = "EveryMundo";

    //Initializing genders variables
    $scope.genderAll = Constants.Gender['all'];
    $scope.genderFemale = Constants.Gender['female'];
    $scope.genderMale = Constants.Gender['male'];

    /*
    * Initializing currentGender in all users
    * It is gonna used to keep track the current gender,
    * so we know when you delete an user in what tab you are
    * */
    $scope.currentGender = Constants.Gender['all'];

    //This object going to contain all users id was selected
    $scope.selected = {};

    //Init with all my users
    $scope.initAllUsers = function(){
        userService.initAllUsers();
    };

    $scope.users = userService.allUsers($scope.currentGender);


    /*
    * Function to return if there are any element selected to delete
    * if the return is true Button Delete is activated
    * */
    //
    $scope.elementSelected = function () {
        return Object.values($scope.selected).indexOf(true) > -1 ? false : true;

    };

    $scope.usersGender = function (gender) {

        $scope.currentGender = gender;

        $scope.users = userService.allUsers($scope.currentGender);

    };


    $scope.deleteUsers = function (user_id) {

        $scope.users = userService.deleteUsers($scope.selected, user_id , $scope.currentGender);

        if($scope.currentGender != Constants.Gender['all'])
            $scope.users = userService.usersGender($scope.currentGender);


    }

}]);
