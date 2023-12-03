import day1 from "./index";

describe("On Day 1", () => {
  it(`part1 is identity function`, () => {
    expect(
      day1.solveForPartOne(`1abc2\npqr3stu8vwx\na1b2c3d4e5f\ntreb7uchet`)
    ).toBe("142");
  });

  describe("getFirstNumber", () => {
    it(`Given a string
        When getFirstNumber is called
        Then should return first number found in string
        AND return as Number type
    `, () => {
      expect(day1.getFirstNumber("1st")).toBe(1);
      expect(day1.getFirstNumber("s1t")).toBe(1);
      expect(day1.getFirstNumber("st1")).toBe(1);
      expect(day1.getFirstNumber("and2th45ree")).toBe(2);
      expect(day1.getFirstNumber("finalt3s643t")).toBe(3);
    });
  });
  describe("getLastNumber", () => {
    it(`Given a string
    When getLastNumber is called
    Then should return first number found in string
    AND return as Number type
`, () => {
      expect(day1.getLastNumber("1st")).toBe(1);
      expect(day1.getLastNumber("s1t")).toBe(1);
      expect(day1.getLastNumber("st1")).toBe(1);
      expect(day1.getLastNumber("and2th45ree")).toBe(5);
      expect(day1.getLastNumber("finalt3s643t")).toBe(3);
    });
  });
});
