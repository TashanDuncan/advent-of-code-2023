import { Day } from "../day";

type BagColor = keyof typeof Day2.BAG;
type Hand = [string, BagColor];

class Day2 extends Day {
  static BAG = {
    red: 12,
    green: 13,
    blue: 14,
  };

  private static isValidHand(value: string[]): value is Hand {
    return value[1] === "red" || value[1] === "green" || value[1] === "blue";
  }

  public getGameInfo(game: string): Hand[][] {
    return game
      .replace(/Game \d+: /, "")
      .replace(/,\s/g, " ")
      .replace(/;\s/g, ";")
      .split(";")
      .map((cubes) =>
        cubes.split(" ").reduce((pairs, value, index, hand) => {
          if (index % 2 === 0) {
            pairs.push([value, hand[index + 1] as BagColor]);
          }
          return pairs;
        }, [] as Hand[])
      );
  }

  public validHand([handValue, color]: Hand): boolean {
    return Number(handValue) <= Day2.BAG[color];
  }

  constructor() {
    super(2);
  }

  solveForPartOne(input: string): string {
    let result = 0;
    input.split("\n").forEach((game, index) => {
      const gameInfo = this.getGameInfo(game);
      if (
        gameInfo.every((hands) => hands.every((hand) => this.validHand(hand)))
      ) {
        result += index + 1;
      }
    });
    return String(result);
  }

  private calculatePower(highestCubes: Map<BagColor, number>): number {
    const redValue = highestCubes.get("red") || 0;
    const greenValue = highestCubes.get("green") || 0;
    const blueValue = highestCubes.get("blue") || 0;
    return redValue * greenValue * blueValue;
  }

  solveForPartTwo(input: string): string {
    let result = 0;

    input.split("\n").forEach((game, index) => {
      const highestCubes = new Map<BagColor, number>();

      const gameInfo = this.getGameInfo(game);
      gameInfo.forEach((hands) => {
        hands.forEach(([handValue, color]) => {
          const currentHighestColorValue = highestCubes.get(color) || 0;
          const newValue = Number(handValue);

          if (currentHighestColorValue < newValue) {
            highestCubes.set(color, newValue);
          }
        });
      });

      result += this.calculatePower(highestCubes);
    });

    return String(result);
  }
}

export default new Day2();
