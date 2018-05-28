'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SortValueConverter = undefined;

var _nativeModules = require('@iocast/array-utilities/dist/native-modules');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var SortValueConverter = exports.SortValueConverter = function () {
  function SortValueConverter() {
    _classCallCheck(this, SortValueConverter);
  }

  SortValueConverter.prototype.toView = function toView(array, property, direction) {
    return (0, _nativeModules.sort)(array, property, direction);
  };

  return SortValueConverter;
}();