'use strict';

module.exports = function (codes) {
	return function customizedFormatHTML(req, res, body) {
		if (typeof (body) === 'string') {
			return body;
		}
	}
};
