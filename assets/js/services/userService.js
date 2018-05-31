everyMundo.service("userService", ["$localStorage" ,"$http", function ($localStorage, $http) {

    this.users = $localStorage.users;


    this.initAllUsers = function () {

        $http.get('data.json').then(function (result) {
            $localStorage.users = result.data;
        });
    };

    this.allUsers = function () {
        return $localStorage.users;
    };


    this.usersGender = function (gender) {

        return this.users.filter(function (element) {
            return element.gender == gender;
        });
    };

    this.deleteUsers = function (selected, user_id , currentGender) {

        var auxUsers = $localStorage.users.filter(function (element) {

            if (angular.equals(selected, {}))
                return user_id != element.id ? element : null;
            else
                return !selected[element.id]  ? element : null;

        });


        $localStorage.users = auxUsers;
        this.users = auxUsers;

        return this.allUsers();


    }


}]);
