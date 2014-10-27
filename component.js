'use strict';

var response = require('./lib/response');

module.exports = {
	enable: true,

	name: 'response',

	paramServer: function (elefrant) {
		return {
			formatters: response(elefrant.config.codes).format
		};
	}
};
