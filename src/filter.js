import { filter } from '@iocast/array-utilities';

/**
 * Filter array value converter
 *
 * This value converter takes an array with a property parameter and filters the array and
 * returns it to the view.
 *
 * Usage:
 *   <pre><div repeat.for="nav of router.navigation | filter:'settings.step':filterFuncOnController.bind($this)">...</div></pre>
 */
export class FilterValueConverter {

  /**
   * To View Method
   *
   * @param {Array}	    items - this is the parameter items
   * @param {String}    property - this is the parameter property
   * @param {function}  filterFunc - filter function on controller
   *
   * @return {Array} filtered array
   * @example "nav of router.navigation | filter:'settings.step':exists.bind($this)"
   */
  toView(items, property, filterFunc) {
    return filter(items, property, filterFunc);
  }

}
