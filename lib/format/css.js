'use strict';

module.exports = function (codes) {
	return function customizedFormatCSS(req, res, body) {
        return res.formatters['text/html'](req, res, body);
	};
};
