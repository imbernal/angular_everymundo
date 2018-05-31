everyMundo.service("userService" , ["$http"  , function($http){

  this.users = [
      {"id": 1, "first_name": "Israel", "last_name": "Bernal", "email": "imbernal9203@gmail.com" , "gender": "Male"},
      {"id": 2, "first_name": "Dailianys", "last_name": "Barrios", "email": "example2@gmail.com", "gender": "Female"},
      {"id": 3, "first_name": "Dailivis", "last_name": "Barrios", "email": "example3@gmail.com", "gender": "Female"},
      {"id": 4, "first_name": "Alex", "last_name": "Vivero", "email": "example4@gmail.com", "gender": "Male"},
      {"id": 5, "first_name": "Manuel", "last_name": "Mendez", "email": "example4@gmail.com", "gender": "Male"},
      {"id": 6, "first_name": "Yusnier", "last_name": "Ruiz", "email": "example5@gmail.com", "gender": "Male"},
      {"id": 7, "first_name": "Lary", "last_name": "Pena", "email": "example6@gmail.com", "gender": "Female"},
      {"id": 8, "first_name": "Olga", "last_name": "Abraham", "email": "example4@gmail.com", "gender": "Female"},
      {"id": 9, "first_name": "Israel", "last_name": "Bernal", "email": "example8@gmail.com", "gender": "Male"},
      {"id": 10, "first_name": "Lorena", "last_name": "Bernal", "email": "example9@gmail.com", "gender": "Female"}
    ];


    this.allUsers = function(){
      return this.users;
    }

    this.usersFemale = function(gender){
      return this.users.filter(function(element){
          return element.gender == gender;
      });
    }

    this.deleteUsers = function(selected , user_id){

      return this.users.filter(function(element){
      // if selected is empty it is because the user made click on icon
          if(angular.equals(selected, {}))
            return user_id != element.id ? element : null;
          else
            return !selected[element.id] ? element : null;

      });

    }


}]);
