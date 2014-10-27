'use strict';

module.exports = function (codes) {
    return function customizedFormatHALJSON(req, res, body) {
        return res.formatters['application/json'](req, res, body);
    }
};
