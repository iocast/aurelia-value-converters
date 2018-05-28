
export let StringLengthValueConverter = class StringLengthValueConverter {
  toView(paragraph, characters) {
    if (paragraph.length <= characters) return paragraph;
    return `${paragraph.substring(0, characters - 4)} ...`;
  }

};