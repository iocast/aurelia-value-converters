'use strict';

System.register(['@iocast/array-utilities/dist/native-modules'], function (_export, _context) {
  "use strict";

  var filter, FilterValueConverter;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  return {
    setters: [function (_iocastArrayUtilitiesDistNativeModules) {
      filter = _iocastArrayUtilitiesDistNativeModules.filter;
    }],
    execute: function () {
      _export('FilterValueConverter', FilterValueConverter = function () {
        function FilterValueConverter() {
          _classCallCheck(this, FilterValueConverter);
        }

        FilterValueConverter.prototype.toView = function toView(items, property, filterFunc) {
          return filter(items, property, filterFunc);
        };

        return FilterValueConverter;
      }());

      _export('FilterValueConverter', FilterValueConverter);
    }
  };
});