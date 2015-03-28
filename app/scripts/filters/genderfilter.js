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
    	var output = input;
    	if (input == 'boy') {
    		output = true;
    	} else if (input == 'girl') {
    		output = false;
    	}
      return output;
    };
  });
