import { Day } from "../day";

const numbersObj = {
  one: "1",
  two: "2",
  three: "3",
  four: "4",
  five: "5",
  six: "6",
  seven: "7",
  eight: "8",
  nine: "9",
};

const numbersObjPart2 = {
  eno: "1",
  owt: "2",
  eerht: "3",
  ruof: "4",
  evif: "5",
  xis: "6",
  neves: "7",
  thgie: "8",
  enin: "9",
};

type NumbersType = keyof typeof numbersObj;
type NumbersTypePart2 = keyof typeof numbersObjPart2;

function regexGenerator(obj: { [key: string]: string }) {
  return new RegExp(Object.keys(obj).join("|"), "gi");
}

const numberRegExp = regexGenerator(numbersObj);
const numberRegExpPart2 = regexGenerator(numbersObjPart2);

function isNumber(value: string): value is NumbersType {
  return Object.keys(numbersObj).includes(value);
}

function isNumberPart2(value: string): value is NumbersTypePart2 {
  return Object.keys(numbersObjPart2).includes(value);
}

class Day1 extends Day {
  constructor() {
    super(1);
  }

  getFirstNumber(input: string, part2 = false): string | undefined {
    return part2
      ? input
          .replace(numberRegExp, (matched) =>
            isNumber(matched) ? numbersObj[matched] : matched
          )
          .split("")
          .find((char) => !isNaN(Number(char)))
      : input.split("").find((char) => !isNaN(Number(char)));
  }

  getLastNumber(input: string, part2 = false): string | undefined {
    return part2
      ? input
          .split("")
          .reverse()
          .join("")
          .replace(numberRegExpPart2, (matched) =>
            isNumberPart2(matched) ? numbersObjPart2[matched] : matched
          )
          .split("")
          .find((char) => !isNaN(Number(char)))
      : input
          .split("")
          .reverse()
          .find((char) => !isNaN(Number(char)));
  }
  main(input: string, part2 = false): string {
    const lines = input.split("\n");
    let calibrationValue = 0;

    lines.forEach((line) => {
      const firstNumber = this.getFirstNumber(line, part2);
      const lastNumber = this.getLastNumber(line, part2);
      const newNumber = Number(`${firstNumber}${lastNumber}`);
      calibrationValue += newNumber;
    });

    return String(calibrationValue);
  }

  solveForPartOne(input: string): string {
    return this.main(input);
  }

  solveForPartTwo(input: string): string {
    return this.main(input, true);
  }
}

export default new Day1();
