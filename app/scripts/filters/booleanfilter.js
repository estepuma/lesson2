'use strict';

/**
 * @ngdoc filter
 * @name lesson2App.filter:booleanFilter
 * @function
 * @description
 * # booleanFilter
 * Filter in the lesson2App.
 */
angular.module('lesson2App')
  .filter('booleanFilter', function () {
    return function (input) {
    	var sexo;
    	if(input === 'girl')
    		sexo = false;
    	else sexo = true;
      return sexo;
    };
  });
