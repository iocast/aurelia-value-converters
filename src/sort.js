import { sort } from '@iocast/array-utilities/dist/native-modules';

/**
 * Sort array value converter
 *
 * This value converter takes an array with a property and direction parameter and sorts the array and
 * returns it to the view.
 *
 * Usage:
 *   <pre><div repeat.for="nav of router.navigation | sort:'settings.step':'asc'">...</div></pre>
 */
export class SortValueConverter {
  /**
   * To View method
   *
   * @param {Array}   array - to sort
   * @param {String}  property - property name. to navigate to child object use dot between properties.
   * @param {String}  direction - direction of sorting `asc` or `desc`
   *
   * @return {Array} sorted array
   * @example "nav of router.navigation | sort:'settings.step':'asc'"
   *
   */
  toView(array, property, direction) {
    return sort(array, property, direction);
  }

}
