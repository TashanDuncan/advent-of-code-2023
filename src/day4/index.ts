import { Day } from "../day";

class Day4 extends Day {
  constructor() {
    super(4);
  }

  cardMap = new Map<string, number>();

  parseCards(input: string) {
    return input === ""
      ? []
      : input
          .replace(/Card \d+: /g, "")
          .split("\n")
          .map((line) =>
            line
              .split("|")
              .map((numbers) => numbers.split(" ").filter((num) => num !== ""))
          );
  }
  checkWins(input: string) {
    let result = 0;
    const cards = this.parseCards(input);
    cards.forEach((card) => {
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

  cardMatches(input: string[][][]) {
    return [...input].map((line) => {
      const [winningNums, cardNumbers] = line;
      let matches = 0;
      winningNums.forEach((number) => {
        if (cardNumbers.includes(number)) {
          matches++;
        }
      });
      return matches;
    });
  }

  solveForPartOne(input: string): string {
    return String(this.checkWins(input));
  }

  solveForPartTwo(input: string): string {


    const cards = this.parseCards(input);
    const initalCardMatches = cards.map((card) => 1);

    const matches = this.cardMatches(cards);
    
    for (const [i, winCount] of matches.entries()) {
      for (let j = 1; j <= winCount; j++) {
        initalCardMatches[i + j] += initalCardMatches[i];
      }
    }
    return initalCardMatches.reduce((acc, curr) => acc + curr, 0).toString()
    ;
  }
}

export default new Day4();
