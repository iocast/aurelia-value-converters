"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DatetimeValueConverter = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var DatetimeValueConverter = function () {
  function DatetimeValueConverter() {
    _classCallCheck(this, DatetimeValueConverter);

    _defineProperty(this, "longFormat", {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });

    _defineProperty(this, "shortDateFormat", {
      weekday: 'long',
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });

    _defineProperty(this, "shortTimeFormat", {
      hour: 'numeric',
      minute: '2-digit'
    });
  }

  _createClass(DatetimeValueConverter, [{
    key: "toView",
    value: function toView(value, locales, options) {
      var time = false;
      var dDate = null;

      if (value instanceof Date) {
        dDate = value;
      } else if (value instanceof String || typeof value === 'string') {
        dDate = new Date(value);
      } else {
        return value;
      }

      if (options instanceof String || typeof options === 'string') {
        if (options.toLowerCase() === 'long') {
          options = this.longFormat;
        } else if (options.toLowerCase() === 'shortdate') {
          options = this.shortDateFormat;
        } else if (options.toLowerCase() === 'shorttime') {
          time = true;
          options = this.shortTimeFormat;
        }
      }

      if (time) {
        return dDate.toLocaleTimeString(locales, options);
      }

      return dDate.toLocaleDateString(locales, options);
    }
  }]);

  return DatetimeValueConverter;
}();

exports.DatetimeValueConverter = DatetimeValueConverter;