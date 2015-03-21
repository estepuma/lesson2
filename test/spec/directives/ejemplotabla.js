'use strict';

describe('Directive: ejemploTabla', function () {

  // load the directive's module
  beforeEach(module('lesson2App'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<ejemplo-tabla></ejemplo-tabla>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the ejemploTabla directive');
  }));
});
