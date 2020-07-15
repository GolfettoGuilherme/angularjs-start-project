angular.module('angularStartApp', ['ngRoute']).config(function($routeProvider, $locationProvider){

    $locationProvider.html5Mode(true);

    $routeProvider.when('/',{
        templateUrl : 'views/principal.html',
        controller: 'MainController'
    });
});

