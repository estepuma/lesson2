'use strict';

/**
 * @ngdoc function
 * @name lesson2App.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the lesson2App
 */
angular.module('lesson2App')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
