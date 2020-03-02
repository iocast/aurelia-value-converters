"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.configure = configure;

var _aureliaPal = require("aurelia-pal");

function configure(config) {
  config.globalResources([_aureliaPal.PLATFORM.moduleName('./datetime'), _aureliaPal.PLATFORM.moduleName('./filter'), _aureliaPal.PLATFORM.moduleName('./sort'), _aureliaPal.PLATFORM.moduleName('./string-length')]);
}