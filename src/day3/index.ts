import { Day } from "../day";

interface NumbersWithIndices {
  number: string;
  index: number;
}
class Day3 extends Day {
  constructor() {
    super(3);
  }
  getNumbers(line: string): NumbersWithIndices[] {
    const regex = /\d+/g;
    let match: RegExpExecArray | null;
    const numbersWithIndices: { number: string; index: number }[] = [];

    while ((match = regex.exec(line)) !== null) {
      numbersWithIndices.push({
        number: match[0],
        index: match.index,
      });
    }

    console.log(numbersWithIndices);
    return numbersWithIndices;
  }

  isSymbol(char: string): boolean {
    return /[^\w\s\d.]/.test(char);
  }

  public isSymbolAdjacent(
    number: NumbersWithIndices,
    currentLine: string,
    lineAbove: string = "",
    lineBelow: string = ""
  ) {
    if (
      this.isSymbol(currentLine[number.index - 1]) ||
      this.isSymbol(currentLine[number.index + number.number.length])
    ) {
      return true;
    }
    for (
      let index = number.index - 1;
      index <= number.index + number.number.length;
      index++
    ) {
      if (this.isSymbol(lineAbove[index]) || this.isSymbol(lineBelow[index])) {
        return true;
      }
    }
    return false;
  }

  solveForPartOne(input: string): string {
    const validNumbers: number[] = [];
    const lines = input.split("\n");
    lines.forEach((line, index) => {
      const numbers = this.getNumbers(line);
      console.log(numbers);
      numbers.forEach((number) => {
        if (
          this.isSymbolAdjacent(
            number,
            line,
            lines[index - 1],
            lines[index + 1]
          )
        ) {
          validNumbers.push(Number(number.number));
        }
      });
    });
    const initialValue = 0;
    const result = validNumbers.reduce(
      (accumulator, currentValue) => accumulator + currentValue,
      initialValue
    );
    return String(result);
  }

  solveForPartTwo(input: string): string {
    return input;
  }
}

export default new Day3();
