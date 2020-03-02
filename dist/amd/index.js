define(["exports", "aurelia-pal"], function (_exports, _aureliaPal) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.configure = configure;

  function configure(config) {
    config.globalResources([_aureliaPal.PLATFORM.moduleName('./datetime'), _aureliaPal.PLATFORM.moduleName('./filter'), _aureliaPal.PLATFORM.moduleName('./sort'), _aureliaPal.PLATFORM.moduleName('./string-length')]);
  }
});