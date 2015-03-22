'use strict';

describe('Filter: filterGender', function () {

  // load the filter's module
  beforeEach(module('lesson2App'));

  // initialize a new instance of the filter before each test
  var filterGender;
  beforeEach(inject(function ($filter) {
    filterGender = $filter('filterGender');
  }));

  it('should return the input prefixed with "filterGender filter:"', function () {
    var text = 'angularjs';
    expect(filterGender(text)).toBe('filterGender filter: ' + text);
  });

});
