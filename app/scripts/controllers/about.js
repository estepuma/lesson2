'use strict';

/**
 * @ngdoc function
 * @name lesson2App.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the lesson2App
 */
angular.module('lesson2App')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
