everyMundo.service("userService", ["$http", function ($http) {


    this.allUsers = function () {

        return $http.get('data.json').then(function (result) {
            return result.data;
        });

    };

    this.usersFemale = function (gender) {

        return $http.get('data.json').then(function (result) {
            return result.data.filter(function (element) {
                return element.gender == gender;
            });
        });


    };

    this.deleteUsers = function (selected, user_id) {

        return $http.get('data.json').then(function (result) {
            return result.data.filter(function (element) {

                if (angular.equals(selected, {}))
                    return user_id != element.id ? element : null;
                else
                    return !selected[element.id] ? element : null;

            });
        });
        

    }


}]);
