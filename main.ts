import { Fibonacci } from "./Fibonacci";

const fibonacci = new Fibonacci();
const arg: number = Number(process.argv[2]);

try {
  fibonacci.print(arg);
} catch (error) {
  console.error((error as Error).message);
}
