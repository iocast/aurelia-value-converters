"use strict";

System.register([], function (_export, _context) {
  "use strict";

  var StringLengthValueConverter;

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  return {
    setters: [],
    execute: function () {
      _export("StringLengthValueConverter", StringLengthValueConverter = function () {
        function StringLengthValueConverter() {
          _classCallCheck(this, StringLengthValueConverter);
        }

        _createClass(StringLengthValueConverter, [{
          key: "toView",
          value: function toView(paragraph, characters) {
            if (paragraph.length <= characters) return paragraph;
            return "".concat(paragraph.substring(0, characters - 4), " ...");
          }
        }]);

        return StringLengthValueConverter;
      }());
    }
  };
});