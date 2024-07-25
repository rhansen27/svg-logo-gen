const { Circle, Triangle, Square, Shape } = require("./Shapes");

describe("Making a triangle", () => {
  test('Making a triangle with a background color of red, text color of blue, and text of "RPH', () => {
    const shape = new Triangle("red", "blue", "RPH");

    expect(shape.render())
      .toEqual(`<svg height="200" width="300" xmlns="http://www.w3.org/2000/svg">
            <polygon points="100,10 150,190 50,190" style="fill:blue; stroke:pink; stroke-width:1;"/>
            <text x="70" y="150" font-weight='bold' fill= 'pink' font-size='30'>WOW</text>
        </svg>`);
  });
});
