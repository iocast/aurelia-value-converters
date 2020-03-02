"use strict";

System.register(["@iocast/array-utilities"], function (_export, _context) {
  "use strict";

  var filter, FilterValueConverter;

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  return {
    setters: [function (_iocastArrayUtilities) {
      filter = _iocastArrayUtilities.filter;
    }],
    execute: function () {
      _export("FilterValueConverter", FilterValueConverter = function () {
        function FilterValueConverter() {
          _classCallCheck(this, FilterValueConverter);
        }

        _createClass(FilterValueConverter, [{
          key: "toView",
          value: function toView(items, property, filterFunc) {
            return filter(items, property, filterFunc);
          }
        }]);

        return FilterValueConverter;
      }());
    }
  };
});