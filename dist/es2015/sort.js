import { sort } from '@iocast/array-utilities';

export let SortValueConverter = class SortValueConverter {
  toView(array, property, direction) {
    return sort(array, property, direction);
  }
};