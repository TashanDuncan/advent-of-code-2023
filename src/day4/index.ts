import { Day } from "../day";

class Day4 extends Day {
  constructor() {
    super(4);
  }
  checkWins(input: string) {
    let result = 0;
    const logic = input
      .replace(/Card \d+: /g, "")
      .split("\n")
      .map((line) =>
        line
          .split("|")
          .map((numbers) => numbers.split(" ").filter((num) => num !== ""))
      );
    logic.forEach((card) => {
      const [winningNums, cardNumbers] = card;
      let matches = 0;
      let points = 0;
      winningNums.forEach((number) => {
        for (let index = 0; index < cardNumbers.length; index++) {
          if (number === cardNumbers[index]) {
            matches++;
          }
        }
      });

      if (matches > 0) {
        points = 1;
      }
      if (matches > 1) {
        for (let index = 1; index < matches; index++) {
          points *= 2;
        }
      }

      result += points;
    });
    return result;
  }

  solveForPartOne(input: string): string {
    return String(this.checkWins(input));
  }

  solveForPartTwo(input: string): string {
    return input;
  }
}

export default new Day4();
