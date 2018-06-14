'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SortValueConverter = undefined;

var _arrayUtilities = require('@iocast/array-utilities');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var SortValueConverter = exports.SortValueConverter = function () {
  function SortValueConverter() {
    _classCallCheck(this, SortValueConverter);
  }

  SortValueConverter.prototype.toView = function toView(array, property, direction) {
    return (0, _arrayUtilities.sort)(array, property, direction);
  };

  return SortValueConverter;
}();