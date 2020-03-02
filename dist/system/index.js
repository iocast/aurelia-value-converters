"use strict";

System.register(["aurelia-pal"], function (_export, _context) {
  "use strict";

  var PLATFORM;

  function configure(config) {
    config.globalResources([PLATFORM.moduleName('./datetime'), PLATFORM.moduleName('./filter'), PLATFORM.moduleName('./sort'), PLATFORM.moduleName('./string-length')]);
  }

  _export("configure", configure);

  return {
    setters: [function (_aureliaPal) {
      PLATFORM = _aureliaPal.PLATFORM;
    }],
    execute: function () {}
  };
});