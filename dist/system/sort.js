"use strict";

System.register(["@iocast/array-utilities"], function (_export, _context) {
  "use strict";

  var sort, SortValueConverter;

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  return {
    setters: [function (_iocastArrayUtilities) {
      sort = _iocastArrayUtilities.sort;
    }],
    execute: function () {
      _export("SortValueConverter", SortValueConverter = function () {
        function SortValueConverter() {
          _classCallCheck(this, SortValueConverter);
        }

        _createClass(SortValueConverter, [{
          key: "toView",
          value: function toView(array, property, direction) {
            return sort(array, property, direction);
          }
        }]);

        return SortValueConverter;
      }());
    }
  };
});