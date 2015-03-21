'use strict';

/**
 * @ngdoc directive
 * @name lesson2App.directive:synergyTable
 * @description
 * # synergyTable
 */
angular.module('lesson2App')
  .directive('synergyTable', function () {
    return {
      template: '<div></div>',
      replace:true, //
      restrict: 'EA', //Element Attribute
      scope:{
        title :'=',
      },
      link: function postLink(scope, element, attrs) {
        //console.log(scope, element, attrs);
        element.text('this is the synergyTable directive' + scope.title);
      }
    };
  });
