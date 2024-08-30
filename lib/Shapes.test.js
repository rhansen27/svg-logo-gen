import { Circle, Triangle, Square, Shape } from "./Shapes.js";

describe("Making a triangle", () => {
  test('Making a triangle with a background color of red, text color of blue, and text of "RPH', () => {
    const shape = new Triangle("red", "blue", "RPH");

    expect(shape.render()).toEqual(`
        <svg height="200" width="300" xmlns="http://www.w3.org/2000/svg">
            <polygon points="100,10 150,190 50,190" style="fill:red; stroke:blue; stroke-width:1;"/>
            <text x="70" y="150" font-weight='bold' fill= 'blue' font-size='30'>RPH</text>
        </svg>`);
  });
});
describe("Making a square", () => {
  test('Making a square with a background color of red, text color of blue, and text of "RPH', () => {
    const shape = new Square("red", "blue", "RPH");

    expect(shape.render()).toEqual(`
        <svg height="200" width="300" xmlns="http://www.w3.org/2000/svg">
            <rect width="150" height="150" x="10" y="10" style="fill:red;stroke-width:1;stroke:blue" />
            <text x="50" y="100" font-weight='bold' fill= 'blue' font-size='30'>RPH</text>
        </svg>`);
  });
});

describe("Making a circle", () => {
  test('Making a circle with a background color of red, text color of blue, and text of "RPH', () => {
    const shape = new Circle("red", "blue", "RPH");

    expect(shape.render())
      .toEqual(`<svg height="200" width="300" xmlns="http://www.w3.org/2000/svg">
            <circle r="45" cx="50" cy="50" fill="red" stroke = "blue" stroke-width ="1" />
            <text x="20" y="60" font-weight='bold' fill= 'blue' font-size='30'>RPH</text>
        </svg>`);
  });
});
