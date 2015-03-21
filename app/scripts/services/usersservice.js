'use strict';

/**
 * @ngdoc service
 * @name lesson2App.usersService
 * @description
 * # usersService
 * Service in the lesson2App.
 */
angular.module('lesson2App')
  .service('usersService', function ($http) {
    return {
    	users: $http.get('scripts/mocks/users.json')
    }
  });
