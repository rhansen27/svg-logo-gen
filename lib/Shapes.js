class Shape {
  constructor(bgColo, fgColor, text) {
    this.bgColor = bgColo;
    this.fgColor = fgColor;
    this.text = text;
  }
}

class Circle extends Shape {
  constructor(bgColor, fgColor, text) {
    super(bgColor, fgColor, text);
  }

  render() {
    return `<svg height="200" width="300" xmlns="http://www.w3.org/2000/svg">
            <circle r="45" cx="50" cy="50" fill="${this.bgColor}" stroke = "${this.fgColor}" stroke-width ="1" />
            <text x="20" y="60" font-weight='bold' fill= '${this.fgColor}' font-size='30'>${this.text}</text>
        </svg>`;
  }
}
