var myApp = angular.module('myApp',
  ['ngRoute' , 'pigLatin']);

myApp.config(['$routeProvider', function($routeProvider) {
  $routeProvider.
    when('/', {
      templateUrl: 'views/translator.html',
      controller:  'translatorController'
    }).
    otherwise({
      redirectTo: '/'
    });
}]);


