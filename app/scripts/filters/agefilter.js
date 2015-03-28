'use strict';

/**
 * @ngdoc filter
 * @name lesson2App.filter:ageFilter
 * @function
 * @description
 * # ageFilter
 * Filter in the lesson2App.
 */
angular.module('filters', [])
  .filter('ageFilter', function () {
    return function (input) {
      if (isNaN(input)) return false;

      if (input < 18) {
      	return "Menor de Edad";
      } else if (input >= 18 && input <= 60) {
      	return 'Adulto';
      } else {
      	return 'Es Chabelo';
      }

      	return input;
    };
  });
