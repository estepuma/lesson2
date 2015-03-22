'use strict';

/**
 * @ngdoc filter
 * @name lesson2App.filter:filterGender
 * @function
 * @description
 * # filterGender
 * Filter in the lesson2App.
 */
angular.module('lesson2App')
  .filter('filterGender', function () {
    return function (input) {
      if(input){
      	return 'Niño';
      }else{
      	return 'Niña';
      }
    };
  });
