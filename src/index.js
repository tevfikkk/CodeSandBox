import { compose } from "ramda";

// Function Composition
const multiplyBy2 = (n) => n * 2;
const add3 = (n) => n + 3;
const divideBy5 = (n) => n / 5;
const subtractBy4 = (n) => n - 4;

const doStuff = compose(divideBy5, add3, multiplyBy2);

//console.log(doStuff(11));

const reduce = (array, howToCombine, buildingUp) => {
  for (let i = 0; i < array.length; i++) {
    buildingUp = howToCombine(buildingUp, array[i]);
  }
  return buildingUp;
};

const runFunctionOnInput = (input, fn) => fn(input);

const output = reduce(
  [multiplyBy2, add3, divideBy5, subtractBy4],
  runFunctionOnInput,
  11
);

console.log(output);
