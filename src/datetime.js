/**
 * DateTime value converter
 *
 * This value converter takes a date object and converts it to the locale format.
 *
 * Usage:
 *   <pre></pre>
 */
export class DatetimeValueConverter {
  longFormat = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  };

  shortDateFormat = { weekday: 'long', year: 'numeric', month: 'short', day: 'numeric' }

  shortTimeFormat = { hour: 'numeric', minute: '2-digit' };

  /**
   *
   *
   * @param {Date|String}             value - a date object
   * @param {String}           locales - A string with a BCP 47 language tag, or an array of such strings.
   * @param {String|Object}    [options] - this is the parameter format. Following presettings exists: ['long'|'short']
   *
   * @return {String}   formatted string
   * @example "date | datetime:'de':{weekday:'long'}"
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleDateString
   */
  toView(value, locales, options) {
    let time = false;
    let dDate = null;

    if (value instanceof Date) {
      dDate = value;
    } else if (value instanceof String || typeof(value) === 'string') {
      dDate = new Date(value);
    } else {
      return value;
    }

    if (options instanceof String || typeof options === 'string') {
      if (options.toLowerCase() === 'long') {
        options = this.longFormat;
      } else if (options.toLowerCase() === 'shortdate') {
        options = this.shortDateFormat;
      } else if (options.toLowerCase() === 'shorttime') {
        time = true;
        options = this.shortTimeFormat;
      }
    }

    if (time) { return dDate.toLocaleTimeString(locales, options); }
    return dDate.toLocaleDateString(locales, options);
  }
}
