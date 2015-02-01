'use strict';

describe('Controller: formCtrl', function () {

  // load the controller's module
  beforeEach(module('smileMeApp'));

  var formCtrl,
	scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
	scope = $rootScope.$new();
	formCtrl = $controller('formCtrl', {
	  $scope: scope
	});
  }));

  var emailPattern = /[a-z0-9._]+@[a-z0-9._]+\.[a-z]{2,4}$/;
  var telefonoPattern = /^[0-9]{9}$/;

  it('these emails should match the pattern', function () {
  		var email = "jose@uca.es";
  		var email2 = "jose@alum.uca.es";
  		var email3 = "jose_garcia.amenabar@uca.es";
		expect(email).toMatch(emailPattern);
		expect(email2).toMatch(emailPattern);
		expect(email3).toMatch(emailPattern);

  })
  it('these emails should not match the pattern', function () {
  		var email = "joseuca.es";
  		var email2 = "jose@ucaes";
  		var email3 = "jose@uca.eseses";
  		var email4 = "jose@uca.45";
		expect(email).not.toMatch(emailPattern);
		expect(email2).not.toMatch(emailPattern);
		expect(email3).not.toMatch(emailPattern);
  		expect(email4).not.toMatch(emailPattern);
  })
  it('this phone number should match the pattern', function () {
  		var telefono = "123456789";
		expect(telefono).toMatch(telefonoPattern);
  })
  it('these phone numbers should not match the pattern', function () {
  		var telefono = "1234567890";
  		var telefono2 = "12345678";
  		var telefono3 = "1234a5678";
  		expect(telefono).not.toMatch(telefonoPattern);
  		expect(telefono2).not.toMatch(telefonoPattern);
  		expect(telefono3).not.toMatch(telefonoPattern);
  })
});
