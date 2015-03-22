'use strict';

/**
 * @ngdoc filter
 * @name lesson2App.filter:genderFilter
 * @function
 * @description
 * # genderFilter
 * Filter in the lesson2App.
 */
angular.module('lesson2App')
  .filter('genderFilter', function () {
    return function (input) {
      if (!isNaN(input)) return false;

      if (input === 'girl') {
      	return "true";
      } else {
      	return 'false';
      }

      	return input;
    };
  });
