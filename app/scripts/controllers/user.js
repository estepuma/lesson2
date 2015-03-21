'use strict';

/**
 * @ngdoc function
 * @name lesson2App.controller:UserCtrl
 * @description
 * # UserCtrl
 * Controller of the lesson2App
 */
 angular.module('lesson2App')
 .controller('UserCtrl', function ($scope, usersService) {

   usersService.users.success(function (res) {
    $scope.nombres = res;
  });

   $scope.deleteNombresFn = function(index) {
    $scope.nombres.splice(index,1);
  };

  $scope.addNombreFn = function () {
   $scope.nombres.push({name:$scope.nameText,gender:$scope.genderText,age:$scope.ageText});
 }

});
