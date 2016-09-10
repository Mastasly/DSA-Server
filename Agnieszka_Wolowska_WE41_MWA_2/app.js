/*
Author: Agnieszka Wolowska
Assignment: WE4 Mobile Web Applications, Digital Skills Academy
Date : 2016/09/12
Ref: 

https://tests4geeks.com/tutorials/single-page-application-using-angularjs-tutorial/
http://www.w3schools.com/
https://github.com/
*/
var app = angular.module('myApp', []); /*module container for diffrent parts of application like controllers,service,etc.*/

/*controller*/
app.controller('HomeController', function($scope) {
  $scope.message = 'Home Shooping List section';


});


/*The ngRoute module makes my app Single Page Application  with no page reloading*/
var app = angular.module('myApp', ['ngRoute']);
/*$routeProvider define what page to display when a user clicks a link */
app.config(function($routeProvider) {
  $routeProvider

  .when('/', {
    templateUrl : 'pages/home.html',
    controller  : 'HomeController'
  })

  .when('/blog', {
    templateUrl : 'pages/blog.html',
    controller  : 'BlogController'
  })

  .when('/about', {
    templateUrl : 'pages/about.html',
    controller  : 'AboutController'
  })

  .otherwise({redirectTo: '/'});
});
/*controller messages */
app.controller('HomeController', function($scope) {
  $scope.message = ' Home Shooping List section';
});

app.controller('BlogController', function($scope) {
  $scope.message = ' Blog section';
});

app.controller('AboutController', function($scope) {
  $scope.message = ' About section';
});

/* The controller myCtrl adds an array named products to the current $scope. Function named addItem added to controller to use the value of the addMe input field to add an item to the products array. */
app.controller("myCtrl", function($scope) {
    $scope.products = ["Milk", "Bread", "Cheese"];
    $scope.addItem = function () {
        $scope.errortext = "";
        if (!$scope.addMe) {return;}
        if ($scope.products.indexOf($scope.addMe) == -1) {
            $scope.products.push($scope.addMe);
        } else {
            $scope.errortext = "The item is already in your shopping list.";/* checking the value before adding new items- can't add empty item or the same item and giving warning message */
        }
    }/*function named removeItem, which takes the index of the item you want to remove, as a parameter.*/
    $scope.removeItem = function (x) {
        $scope.errortext = "";
        $scope.products.splice(x, 1);
    }
    
});