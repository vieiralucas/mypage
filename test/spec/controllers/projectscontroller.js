'use strict';

describe('Controller: ProjectscontrollerCtrl', function () {

  // load the controller's module
  beforeEach(module('newSiteApp'));

  var ProjectscontrollerCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ProjectscontrollerCtrl = $controller('ProjectscontrollerCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
