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

   $scope.deleteNombres = function(index) {
    $scope.nombres.splice(index,1);
  };

  $scope.addNombre = function () {
   $scope.nombres.push({name:$scope.nameText,gender:$scope.genderText,age:$scope.ageText});
 }

});
