'use strict';

System.register(['@iocast/array-utilities/dist/native-modules'], function (_export, _context) {
  "use strict";

  var sort, SortValueConverter;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  return {
    setters: [function (_iocastArrayUtilitiesDistNativeModules) {
      sort = _iocastArrayUtilitiesDistNativeModules.sort;
    }],
    execute: function () {
      _export('SortValueConverter', SortValueConverter = function () {
        function SortValueConverter() {
          _classCallCheck(this, SortValueConverter);
        }

        SortValueConverter.prototype.toView = function toView(array, property, direction) {
          return sort(array, property, direction);
        };

        return SortValueConverter;
      }());

      _export('SortValueConverter', SortValueConverter);
    }
  };
});