'use strict';

module.exports = function (codes) {
	return function customizedFormatHTML(req, res, body) {
		if(typeof body === 'object') {
			return res.formatters['application/json'](req, res, body);
		} else {
            body = body.toString();
            res.setHeader('Content-Length', Buffer.byteLength(body));
			return body;
		}
	};
};
