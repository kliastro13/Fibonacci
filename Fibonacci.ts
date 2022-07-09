export class Fibonacci {
  print(numbersToPrint: number): void {
    const fibonacciNumbers: number[] = [0, 1];

    if (numbersToPrint < 1 || !numbersToPrint) {
      throw new Error("Enter integer number from 1 to Infinity");
    }

    if (numbersToPrint == 1) {
      console.log(fibonacciNumbers[0]);
      return;
    }

    for (let i = 2; i < numbersToPrint; i++) {
      fibonacciNumbers.push(fibonacciNumbers[i - 1] + fibonacciNumbers[i - 2]);
    }
    console.log(fibonacciNumbers);
  }
}
