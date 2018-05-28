"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var StringLengthValueConverter = exports.StringLengthValueConverter = function () {
  function StringLengthValueConverter() {
    _classCallCheck(this, StringLengthValueConverter);
  }

  StringLengthValueConverter.prototype.toView = function toView(paragraph, characters) {
    if (paragraph.length <= characters) return paragraph;
    return paragraph.substring(0, characters - 4) + " ...";
  };

  return StringLengthValueConverter;
}();