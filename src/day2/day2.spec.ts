import day2 from "./index";

describe("On Day 2", () => {
  it(`part1 is identity function`, () => {
    expect(
      day2.solveForPartOne(
        "Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green\nGame 2: 1 blue, 2 green; 3 green, 4 blue, 1 red; 1 green, 1 blue\nGame 3: 8 green, 6 blue, 20 red; 5 blue, 4 red, 13 green; 5 green, 1 red\nGame 4: 1 green, 3 red, 6 blue; 3 green, 6 red; 3 green, 15 blue, 14 red\nGame 5: 6 red, 1 blue, 3 green; 2 blue, 1 red, 2 green"
      )
    ).toBe("8");
  });
  it(`part2 is identity function`, () => {
    expect(
      day2.solveForPartTwo(
        "Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green\nGame 2: 1 blue, 2 green; 3 green, 4 blue, 1 red; 1 green, 1 blue\nGame 3: 8 green, 6 blue, 20 red; 5 blue, 4 red, 13 green; 5 green, 1 red\nGame 4: 1 green, 3 red, 6 blue; 3 green, 6 red; 3 green, 15 blue, 14 red\nGame 5: 6 red, 1 blue, 3 green; 2 blue, 1 red, 2 green"
      )
    ).toBe("2286");
  });
  
  describe("getGameInfo", () => {
    it("should parse game info correctly", () => {
      const expected = [
        [
          ["3", "blue"],
          ["4", "red"],
        ],
        [
          ["1", "red"],
          ["2", "green"],
          ["6", "blue"],
        ],
        [["2", "green"]],
      ];

      expect(
        day2.getGameInfo(
          "Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green"
        )
      ).toStrictEqual(expected);
    });
  });

  describe("validHand", () => {
    it("should return true if hand is less than bag value", () => {
      expect(day2.validHand(["3", "blue"])).toBe(true);
      expect(day2.validHand(["15", "blue"])).toBe(false);

      expect(day2.validHand(["12", "red"])).toBe(true);
      expect(day2.validHand(["13", "red"])).toBe(false);

      expect(day2.validHand(["12", "green"])).toBe(true);
      expect(day2.validHand(["14", "red"])).toBe(false);
    });
  });
});
