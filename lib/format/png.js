'use strict';

module.exports = function (codes) {
	return function customizedFormatPNG(req, res, body) {
        if(typeof body === 'object') {
            return res.formatters['application/json'](req, res, body);
        } else {
            return body;
        }
	};
};
