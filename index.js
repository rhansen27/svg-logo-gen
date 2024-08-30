import inquirer from "inquirer";
import { Circle, Triangle, Square, Shape } from "./lib/Shapes.js";
import fs from "fs/promises";

let shape;

const questions = [
  {
    name: "bgColor",
    type: "input",
    message: "Please enter a background color:",
    prefix: "",
  },
  {
    name: "fgColor",
    type: "input",
    message: "Please enter a text color:",
    prefix: "",
  },
  {
    name: "text",
    type: "input",
    message: "Please enter the logo text (Must be no more than 3 characters):",
    validate: (i) => (i.length > 3 ? false : true),
    prefix: "",
  },
  {
    name: "shapeType",
    type: "list",
    message: "Please select a shape:",
    choices: ["Circle", "Triangle", "Square"],
    prefix: "",
  },
  {
    name: "filename",
    type: "input",
    message: "Please enter a filename greater than 3 characters:",
    validate: (i) => (i.length < 3 ? false : true),
    prefix: "",
  },
];

function init() {
  inquirer.prompt(questions).then((answers) => {
    switch (answers.shapeType) {
      case "Circle":
        shape = new Circle(answers.bgColor, answers.fgColor, answers.text);
        createSVG(shape, answers.filename);
        break;
      case "Triangle":
        shape = new Triangle(answers.bgColor, answers.fgColor, answers.text);
        createSVG(shape, answers.filename);
        break;
      case "Square":
        shape = new Square(answers.bgColor, answers.fgColor, answers.text);
        createSVG(shape, answers.filename);
        break;
      default:
        break;
    }
  });
}

async function createSVG(shape, filename) {
  await fs.writeFile(`./examples/${filename}.svg`, shape.render());
  console.log(`File created at ./examples/${filename}.svg`);
}

init();
