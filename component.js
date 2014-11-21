'use strict';

var configDefault = require('./config/codes.js'),
	response = require('./lib/response');

module.exports = {
	enable: true,

	name: 'response',

	paramServer: function (elefrant) {
		var codes = configDefault;
		if (elefrant && elefrant.getConfigComp) {
			codes = elefrant.getConfigComp('codes', configDefault);
		}

		return {
			formatters: response(codes).format
		};
	}
};
