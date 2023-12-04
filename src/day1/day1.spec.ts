import day1 from "./index";

describe("On Day 1", () => {
  it(`part1 is identity function`, () => {
    expect(
      day1.solveForPartOne(`1abc2\npqr3stu8vwx\na1b2c3d4e5f\ntreb7uchet`)
    ).toBe("142");
  });

  it(`part2 is identity function`, () => {
    expect(
      day1.solveForPartTwo(
        `two1nine\neightwothree\nabcone2threexyz\nxtwone3four\n4nineeightseven2\nzoneight234\n7pqrstsixteen`
      )
    ).toBe("281");
  });
});

describe("getFirstNumber", () => {
  it(`Given a string
      When getFirstNumber is called
      Then should return first number found in string
  `, () => {
    expect(day1.getFirstNumber("1st")).toBe("1");
    expect(day1.getFirstNumber("s1t")).toBe("1");
    expect(day1.getFirstNumber("st1")).toBe("1");
    expect(day1.getFirstNumber("and2th45ree")).toBe("2");
    expect(day1.getFirstNumber("finalt3s643t")).toBe("3");
  });

  it(`Given a string with a number written in letters
  When getFirstNumber is called with part 2 param as true
  Then should return first number found in string
`, () => {
    expect(day1.getFirstNumber("two1nine", true)).toBe("2");
    expect(day1.getFirstNumber("eightwothree", true)).toBe("8");
    expect(day1.getFirstNumber("abcone2threexyz", true)).toBe("1");
    expect(day1.getFirstNumber("xtwone3four", true)).toBe("2");
    expect(day1.getFirstNumber("4nineeightseven2", true)).toBe("4");
    expect(day1.getFirstNumber("oneight234", true)).toBe("1");
  });
});
describe("getLastNumber", () => {
  it(`
  Given a string
  When getLastNumber is called
  Then should return last number found in string
`, () => {
    expect(day1.getLastNumber("1st")).toBe("1");
    expect(day1.getLastNumber("s1t")).toBe("1");
    expect(day1.getLastNumber("st1")).toBe("1");
    expect(day1.getLastNumber("and2th45ree")).toBe("5");
    expect(day1.getLastNumber("finalt3s643t")).toBe("3");
  });

  it(`Given a string with a number written in letters
  When getLastNumber is called  with part 2 param as true
  Then should return last number found in string
`, () => {
    expect(day1.getLastNumber("two1nine", true)).toBe("9");
    expect(day1.getLastNumber("eightwothree", true)).toBe("3");
    expect(day1.getLastNumber("abcone2threexyz", true)).toBe("3");
    expect(day1.getLastNumber("xtwone3four", true)).toBe("4");
    expect(day1.getLastNumber("4nineeightseven2", true)).toBe("2");
    expect(day1.getLastNumber("zoneight234", true)).toBe("4");
  });
  it("special case", () => {
    expect(day1.getLastNumber("one9rvzvlrnzhbnnknxfiveeightwols", true)).toBe(
      "2"
    );
  });
});
