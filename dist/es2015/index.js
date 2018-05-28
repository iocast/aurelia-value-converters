import { PLATFORM } from 'aurelia-pal';

export function configure(config) {
  config.globalResources([PLATFORM.moduleName('./datetime'), PLATFORM.moduleName('./filter'), PLATFORM.moduleName('./sort'), PLATFORM.moduleName('./string-length')]);
}