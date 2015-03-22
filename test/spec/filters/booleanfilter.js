'use strict';

describe('Filter: booleanFilter', function () {

  // load the filter's module
  beforeEach(module('lesson2App'));

  // initialize a new instance of the filter before each test
  var booleanFilter;
  beforeEach(inject(function ($filter) {
    booleanFilter = $filter('booleanFilter');
  }));

  it('should return the input prefixed with "booleanFilter filter:"', function () {
    var text = 'angularjs';
    expect(booleanFilter(text)).toBe('booleanFilter filter: ' + text);
  });

});
