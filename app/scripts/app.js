'use strict';

/**
 * @ngdoc overview
 * @name lesson2App
 * @description
 * # lesson2App
 *
 * Main module of the application.
 */
angular
  .module('lesson2App', [
    'ngAnimate',
    'ngRoute',
    'ngSanitize',
    'filters'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/tabla',{
        templateUrl:'views/tabla.html',
        controller:'UserCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
