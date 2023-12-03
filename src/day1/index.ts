import { Day } from "../day";

class Day1 extends Day {
  constructor() {
    super(1);
  }

  getFirstNumber(input: string): number {
    return Number(input.split("").find((char) => !isNaN(Number(char))));
  }

  getLastNumber(input: string): number {
    return Number(
      input
        .split("")
        .reverse()
        .find((char) => !isNaN(Number(char)))
    );
  }

  solveForPartOne(input: string): string {
    const lines = input.split("\n");
    let calibrationValue = 0;

    lines.forEach((line) => {
      const firstNumber = this.getFirstNumber(line);
      const lastNumber = this.getLastNumber(line);
      const newNumber = Number(`${firstNumber}${lastNumber}`);
      calibrationValue += newNumber;

      console.log(`
      line: ${line}
      FirstNumber: ${firstNumber}
      lastNumber: ${lastNumber}
      newNumber: ${newNumber}
      `);
    });

    return String(calibrationValue);
  }

  solveForPartTwo(input: string): string {
    return input;
  }
}

export default new Day1();
