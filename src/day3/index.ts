import { Hash } from "crypto";
import { Day } from "../day";

interface NumbersWithIndices {
  number: string;
  index: number;
}
interface LineWithIndices {
  line: string;
  index: number;
}

class Day3 extends Day {
  gears = new Map<string, string[]>();

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

  isGear(char: string): boolean {
    return /^\*$/.test(char);
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
  addGear(line: LineWithIndices, number: string) {
    const gearKey = `${JSON.stringify(line)}`;
    const currentGear = this.gears.get(gearKey);
    if (currentGear) {
      this.gears.set(gearKey, [...currentGear, number]);
    } else {
      this.gears.set(gearKey, [number]);
    }
  }
  public isGearAdjacent(
    number: NumbersWithIndices,
    currentLine: string,
    lineAbove: string = "",
    lineBelow: string = ""
  ) {
    if (this.isGear(currentLine[number.index - 1])) {
      this.addGear(
        { line: currentLine, index: number.index - 1 },
        number.number
      );
    }
    if (this.isGear(currentLine[number.index + number.number.length])) {
      this.addGear(
        { line: currentLine, index: number.index + number.number.length },
        number.number
      );
    }
    for (
      let index = number.index - 1;
      index <= number.index + number.number.length;
      index++
    ) {
      if (this.isGear(lineAbove[index])) {
        this.addGear({ line: lineAbove, index }, number.number);
      }
      if (this.isGear(lineBelow[index])) {
        this.addGear({ line: lineBelow, index }, number.number);
      }
    }
  }

  solveForPartOne(input: string): string {
    const validNumbers: number[] = [];
    const lines = input.split("\n");
    lines.forEach((line, index) => {
      const numbers = this.getNumbers(line);
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
    const lines = input.split("\n");
    let result = 0;
    lines.forEach((line, index) => {
      const numbers = this.getNumbers(line);
      numbers.forEach((number) => {
        this.isGearAdjacent(number, line, lines[index - 1], lines[index + 1]);
      });
    });
    this.gears.forEach((gear) => {
      if (gear.length === 2) {
        result += Number(gear[0]) * Number(gear[1]);
      }
    });
    return String(result);
  }
}

export default new Day3();
