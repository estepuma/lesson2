'use strict';

describe('Directive: synergyTable', function () {

  // load the directive's module
  beforeEach(module('lesson2App'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<synergy-table></synergy-table>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the synergyTable directive');
  }));
});
