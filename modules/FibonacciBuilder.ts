export class FibonacciBuilder {
  fibonacciNumbersQuantity: number;

  constructor(fibonacciNumbersQuantity = 10) {
    this.fibonacciNumbersQuantity = fibonacciNumbersQuantity;
  }

  showFibonacci(numbersToShow: number = this.fibonacciNumbersQuantity): void {
    const fibonacciNumbers: number[] = [0, 1];
    if (numbersToShow < 1 || typeof numbersToShow !== "number") {
      console.log("Enter integer number from 1 to Infinity");
    } else {
      if (numbersToShow === 1) {
        fibonacciNumbers.pop();
      } else if (numbersToShow > 1) {
        for (let i = 2; i < numbersToShow; i++) {
          fibonacciNumbers.push(
            fibonacciNumbers[i - 1] + fibonacciNumbers[i - 2]
          );
        }
      }
      console.log(fibonacciNumbers);
    }
  }
}
