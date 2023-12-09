import day3 from "./index";

describe("On Day 3", () => {
  it(`part1 is identity function`, () => {
    expect(
      day3.solveForPartOne(
        `467..114..\n...*......\n..35..633.\n......#...\n617*......\n.....+.58.\n..592.....\n......755.\n...$.*....\n.664.598..`
      )
    ).toBe("4361");
  });

  it(`part2 is identity function`, () => {
    expect(
      day3.solveForPartTwo(
        `467..114..\n...*......\n..35..633.\n......#...\n617*......\n.....+.58.\n..592.....\n......755.\n...$.*....\n.664.598..`
      )
    ).toBe("467835");
  });


  describe("getNumbers", () => {
    it("should parse a string and return an object with only numbers and indices", () => {
      expect(day3.getNumbers("467..114..")).toStrictEqual([
        { number: "467", index: 0 },
        { number: "114", index: 5 },
      ]);
    });
  });

  describe("isSymbol", () => {
    test.each([
      "!",
      "@",
      "#",
      "$",
      "%",
      "^",
      "&",
      "*",
      "(",
      ")",
      "-",
      "+",
      "=",
      "{",
      "}",
      "[",
      "]",
      "|",
      "\\",
      ":",
      ";",
      '"',
      "'",
      "<",
      ">",
      ",",
      "?",
      "/",
      "~",
      "`",
    ])("should return true for symbol: %s", (char) => {
      // Act
      const result = day3.isSymbol(char);

      // Assert
      expect(result).toBe(true);
    });

    test.each(["a", "z", "A", "Z", "0", "9", " ", ".", "\t", "\n"])(
      "should return false for non-symbol(including periods): %s",
      (char) => {
        // Act
        const result = day3.isSymbol(char);

        // Assert
        expect(result).toBe(false);
      }
    );

    describe("isSymbolAdjacent", () => {
      it("should return true if symbol is adjacent on the same line", () => {
        expect(
          day3.isSymbolAdjacent({ number: "114", index: 6 }, "467..*114.")
        ).toBe(true);
        expect(
          day3.isSymbolAdjacent({ number: "114", index: 5 }, "467..114*.")
        ).toBe(true);
      });

      it("should return true if symbol is adjacent on the line above", () => {
        expect(
          day3.isSymbolAdjacent(
            { number: "114", index: 5 },
            "467..114.",
            ".....*"
          )
        ).toBe(true);
      });
    });
  });
});
