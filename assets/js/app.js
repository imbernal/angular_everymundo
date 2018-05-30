var app = angular.module('angularTable', []);

app.controller('listdata', function ($scope, $http) {

    $scope.sortKey = 'id';

    $scope.users = [{"id": 1, "first_name": "Heather", "last_name": "Bell", "hobby": "Eating"},
        {"id": 2, "first_name": "Andrea", "last_name": "Dean", "hobby": "Gaming"},
        {"id": 3, "first_name": "Peter", "last_name": "Barnes", "hobby": "Reading Books"},
        {"id": 4, "first_name": "Harry", "last_name": "Bell", "hobby": "Youtubing"},
        {"id": 5, "first_name": "Deborah", "last_name": "Burns", "hobby": "Fishing"},
        {"id": 6, "first_name": "Larry", "last_name": "Kim", "hobby": "Skipping"},
        {"id": 7, "first_name": "Jason", "last_name": "Wallace", "hobby": "Football"},
        {"id": 8, "first_name": "Russell", "last_name": "Patterson", "hobby": "Singing"}];


    $scope.sort = function(keyname){
        $scope.sortKey = keyname;   //set the sortKey to the param passed
        $scope.reverse = !$scope.reverse; //if true make it false and vice versa
    }

    // $http.get("data.json").then(function(response){ 
    //     $scope.users = response;  //ajax request to fetch data into $scope.data
    // });

});