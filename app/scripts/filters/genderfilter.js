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
    	if (input) {
    		return 'BOY';
    	} else {
    		return 'GIRL';
    	}
      	return input;
    };
  });
