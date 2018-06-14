define(['exports', '@iocast/array-utilities'], function (exports, _arrayUtilities) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.FilterValueConverter = undefined;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var FilterValueConverter = exports.FilterValueConverter = function () {
    function FilterValueConverter() {
      _classCallCheck(this, FilterValueConverter);
    }

    FilterValueConverter.prototype.toView = function toView(items, property, filterFunc) {
      return (0, _arrayUtilities.filter)(items, property, filterFunc);
    };

    return FilterValueConverter;
  }();
});