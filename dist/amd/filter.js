define(["exports", "@iocast/array-utilities"], function (_exports, _arrayUtilities) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.FilterValueConverter = void 0;

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  var FilterValueConverter = function () {
    function FilterValueConverter() {
      _classCallCheck(this, FilterValueConverter);
    }

    _createClass(FilterValueConverter, [{
      key: "toView",
      value: function toView(items, property, filterFunc) {
        return (0, _arrayUtilities.filter)(items, property, filterFunc);
      }
    }]);

    return FilterValueConverter;
  }();

  _exports.FilterValueConverter = FilterValueConverter;
});