'use strict';

var codes = require('../config/codes.js'),
		_ = require('lodash'),
		halJson = require('./format/halJson.js'),
		json = require('./format/json.js'),
		html = require('./format/html.js'),
		css = require('./format/css.js'),
		png = require('./format/png.js');

module.exports = function (configCodes) {
	codes = _.extend(codes, configCodes);

	return {
		codes: codes,
		format: {
			'application/hal+json': halJson(codes),
			'application/json': json(codes),
			'text/html': html(codes),
			'text/css': css(codes),
			'image/png': png(codes)
		}
	}
}
