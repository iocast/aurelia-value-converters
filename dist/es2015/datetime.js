
export let DatetimeValueConverter = class DatetimeValueConverter {
  constructor() {
    this.longFormat = {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    };
    this.shortDateFormat = { weekday: 'long', year: 'numeric', month: 'short', day: 'numeric' };
    this.shortTimeFormat = { hour: 'numeric', minute: '2-digit' };
  }

  toView(value, locales, options) {
    let time = false;
    let dDate = null;

    if (value instanceof Date) {
      dDate = value;
    } else if (value instanceof String) {
      dDate = new Date(value);
    } else {
      return value;
    }

    if (typeof options === 'string') {
      if (options.toLowerCase() === 'long') {
        options = this.longFormat;
      } else if (options.toLowerCase() === 'shortdate') {
        options = this.shortDateFormat;
      } else if (options.toLowerCase() === 'shorttime') {
        time = true;
        options = this.shortTimeFormat;
      }
    }

    if (time) {
      return dDate.toLocaleTimeString(locales, options);
    }
    return dDate.toLocaleDateString(locales, options);
  }

};