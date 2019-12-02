'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Methods = {
  GET: 'GET',
  POST: 'POST',
  PUT: 'PUT',
  DELETE: 'DELETE'
};
var DataType = ['json', 'text', 'base64', 'arraybuffer'];
var DEFAULT_TIMEOUT = 60000;
var DEFAULT_DATA_TYPE = 'json';

var Options = function () {
  function Options(url) {
    _classCallCheck(this, Options);

    this.url = url;
    this.data = {};
    this.headers = {};
    this.method = Methods.GET;
    this.timeout = DEFAULT_TIMEOUT;
    this.dataType = DEFAULT_DATA_TYPE;
  }

  _createClass(Options, [{
    key: 'setUrl',
    value: function setUrl(url) {
      this.url = url;
      return this;
    }
  }, {
    key: 'setData',
    value: function setData(data) {
      this.data = data || {};
      return this;
    }
  }, {
    key: 'setMethod',
    value: function setMethod(method) {
      if (Object.keys(Methods).includes(method)) {
        this.method = method || Methods.GET;
      }
      return this;
    }
  }, {
    key: 'setHeaders',
    value: function setHeaders(headers) {
      this.headers = headers || {};
      return this;
    }
  }, {
    key: 'setTimeout',
    value: function setTimeout(timeout) {
      this.timeout = timeout || DEFAULT_TIMEOUT;
      return this;
    }
  }, {
    key: 'setDataType',
    value: function setDataType(dataType) {
      if (DataType.includes(dataType)) {
        this.dataType = dataType || DEFAULT_DATA_TYPE;
      }
      return this;
    }
  }, {
    key: 'request',
    value: function request(complete) {
      var _this = this;

      return new Promise(function (resolve, reject) {
        var url = _this.url,
            method = _this.method,
            headers = _this.headers,
            data = _this.data,
            dataType = _this.dataType;

        my.request({
          url: url,
          method: method,
          headers: headers,
          data: data,
          dataType: dataType,
          success: function success(res) {
            if (dataType.toLowerCase() === 'json') {
              resolve(res.data);
            } else {
              resolve(res);
            }
          },
          fail: function fail(err) {
            reject(err);
          },
          complete: complete
        });
      });
    }
  }]);

  return Options;
}();

module.exports = {
  Methods: Methods,
  Options: Options
};
