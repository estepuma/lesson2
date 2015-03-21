'use strict';

/**
 * @ngdoc directive
 * @name lesson2App.directive:ejemploTabla
 * @description
 * # ejemploTabla
 */
angular.module('lesson2App')
  .directive('ejemploTabla', function () {
    return {
      templateUrl:'scripts/templates/tablaTemplate.html',
      replace:true,
      restrict: 'EA',
      scope:{
      	nombres:'=',
      	deleteNombresFn:'&',
      	addNombreFn:'&'
      },
      link: function postLink(scope, element, attrs) {
      	console.log(scope,element,attrs);
      }
    };
  });
