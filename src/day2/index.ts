import { Day } from "../day";

type Hand = [string, keyof typeof Day2.BAG];
const isValidHand = (value: string[]): value is Hand =>
  value[1] === "red" || value[1] === "green" || value[1] === "blue";
class Day2 extends Day {
  static BAG = {
    red: 12,
    green: 13,
    blue: 14,
  };
  getGameInfo(game: string) {
    return game
      .replace(/Game \d+: /, "")
      .replace(/,\s/g, " ")
      .replace(/;\s/g, ";")
      .split(";")
      .map((cubes) => {
        const hand = cubes.split(" ");
        const pairs = [];
        for (let index = 0; index < hand.length; index += 2) {
          const handValue = [hand[index], hand[index + 1]];
          pairs.push(handValue);
        }
        return pairs;
      });
  }

  validHand(hand: Hand): boolean {
    const [handValue, color] = hand;
    return !!(Number(handValue) <= Day2.BAG[color]);
  }

  constructor() {
    super(2);
  }

  solveForPartOne(input: string): string {
    let result = 0;
    input.split("\n").forEach((game, index) => {
      const gameInfo = this.getGameInfo(game);
      if (
        gameInfo.every((hands) => {
          return hands.every((hand) => {
            if (isValidHand(hand)) {
              return this.validHand(hand);
            }
          });
        })
      ) {
        result += index + 1;
      }
    });
    return String(result);
  }

  solveForPartTwo(input: string): string {
    return input;
  }
}

export default new Day2();
