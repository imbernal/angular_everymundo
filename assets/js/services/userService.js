everyMundo.service("userService", ["$localStorage", "$http" , 'Constants', function ($localStorage, $http ,Constants) {

    this.users = $localStorage.users;


    //This function it is called at moment the application start, i save all date in the localStorage
    this.initAllUsers = function () {

        $http.get('data.json').then(function (result) {
            $localStorage.users = result.data;
        });
    };

    this.listUsers = function (gender) {

        //Return All users based on gender

        if (gender != Constants.Gender['all']) {

            return $localStorage.users.filter(function (element) {
                return gender != Constants.Gender['all'] && element.gender == gender ? element : null;
            });

        } else {

            return this.users;
        }
    };

    
    this.deleteUsers = function (selected, user_id, gender) {

        var auxUsers = $localStorage.users.filter(function (element) {

            //Cheking if selected object is empty -> means that just want to delete an user.
            if (angular.equals(selected, {}))
                return user_id != element.id ? element : null;
            else
                return !selected[element.id] ? element : null;

        });

        //Update localStorage and my global user list
        $localStorage.users = auxUsers;
        this.users = auxUsers;

        //Return all user based on gender tab=> gender = currentGender
        return this.listUsers(gender);


    }


}]);
