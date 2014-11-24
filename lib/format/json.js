'use strict';

module.exports = function (codes) {
	return function customizedFormatJSON(req, res, body) {
		if (body instanceof Error) {
			res.statusCode = body.statusCode;

			if (body.body) {
				body.code = res.statusCode;
				body.status = body.body.code || body.restCode || body.httpCode || codes[res.statusCode].code;
				body.message = body.body.message || body.body.error_description || codes[res.statusCode].description;
				delete body.body;
				delete body.statusCode;
				delete body.restCode;
				delete body.httpCode;
			} else {
				body = {
					code: res.statusCode,
					message: body.message || codes[res.statusCode].description
				};
			}
		} else if (Buffer.isBuffer(body)) {
			body = body.toString('base64');
		}

		var data = JSON.stringify(body);
		res.setHeader('Content-Length', Buffer.byteLength(data));
		res.setHeader('Content-Type', 'application/json');

		return data;
	};
};
