'use strict';

module.exports = function (codes) {
	return function customizedFormatJSON(req, res, body) {
		if (body instanceof Error) {
			// snoop for RestError or HttpError, but don't rely on
			// instanceof
			res.statusCode = body.statusCode;

			if (body.body) {
				body = {
					code: res.statusCode,
					status: body.body.code || codes[res.statusCode].code,
					message: body.body.message || body.body.error_description || codes[res.statusCode].description
				};
			} else {
				body = {
					code: res.statusCode,
					msg: body.message || codes[res.statusCode].description
				};
			}
		} else if (Buffer.isBuffer(body)) {
			body = body.toString('base64');
		}

		var data = JSON.stringify(body);
		res.setHeader('Content-Length', Buffer.byteLength(data));
		res.setHeader('Content-Type', 'application/json');

		return data;
	}
};
