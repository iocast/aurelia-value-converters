System.config({
  defaultJSExtensions: true,
  transpiler: false,
  paths: {
    'github:*': 'jspm_packages/github/*',
    'aurelia-value-converters/*': 'dist/*',
    'npm:*': 'jspm_packages/npm/*'
  },

  map: {
    'aurelia-polyfills': 'npm:aurelia-polyfills@1.0.0',
    'npm:aurelia-polyfills@1.0.0': {
      'aurelia-pal': 'npm:aurelia-pal@1.0.0'
    },
    '@iocast/array-utilities': '@iocast/array-utilities@0.0.4'
  }
});
