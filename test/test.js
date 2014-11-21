'use strict';

var component = require('../component'),
	should = require('should');

describe('Response', function () {

	it('exports an object', function () {
		should.exist(component);
	});

	it('check paramServer', function () {
		should(component.paramServer({})).be.an.Object;
	});
});
