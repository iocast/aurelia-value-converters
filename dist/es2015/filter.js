import { filter } from '@iocast/array-utilities';

export let FilterValueConverter = class FilterValueConverter {
  toView(items, property, filterFunc) {
    return filter(items, property, filterFunc);
  }

};