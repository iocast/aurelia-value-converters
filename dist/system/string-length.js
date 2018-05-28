"use strict";

System.register([], function (_export, _context) {
  "use strict";

  var StringLengthValueConverter;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  return {
    setters: [],
    execute: function () {
      _export("StringLengthValueConverter", StringLengthValueConverter = function () {
        function StringLengthValueConverter() {
          _classCallCheck(this, StringLengthValueConverter);
        }

        StringLengthValueConverter.prototype.toView = function toView(paragraph, characters) {
          if (paragraph.length <= characters) return paragraph;
          return paragraph.substring(0, characters - 4) + " ...";
        };

        return StringLengthValueConverter;
      }());

      _export("StringLengthValueConverter", StringLengthValueConverter);
    }
  };
});