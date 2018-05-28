/**
 * String length value converter
 *
 * cuts a string at a specific length of characters
 *
 * Usage:
 *   <pre><p>${myLongText | string-length:300}</p></pre>
 */
export class StringLengthValueConverter {
  /**
   * To View method
   *
   * @param {String}    string - to cut
   * @param {int}       length - number of characters
   *
   * @return {String} cut string
   * @example "myLongText | string-length:300"
   *
   */
  toView(paragraph, characters) {
    if (paragraph.length <= characters) return paragraph;
    return `${paragraph.substring(0, characters - 4)} ...`;
  }

}
