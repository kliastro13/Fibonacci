"use strict";
exports.__esModule = true;
var FibonacciBuilder_1 = require("./modules/FibonacciBuilder");
var fibonacci = new FibonacciBuilder_1.FibonacciBuilder();
fibonacci.showFibonacci(13);

for (let i = 0; i < process.argv.length; ++i) {
  console.log(`index ${i} argument -> ${process.argv[i]}`);
}
