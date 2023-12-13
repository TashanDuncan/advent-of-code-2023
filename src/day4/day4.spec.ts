import day4 from "./index";

describe("On Day 4", () => {
  it(`part1 is identity function`, () => {
    expect(
      day4.solveForPartOne("Card 1: 41 48 83 86 17 | 83 86  6 31 17  9 48 53\nCard 2: 13 32 20 16 61 | 61 30 68 82 17 32 24 19\nCard 3:  1 21 53 59 44 | 69 82 63 72 16 21 14  1\nCard 4: 41 92 73 84 69 | 59 84 76 51 58  5 54 83\nCard 5: 87 83 26 28 32 | 88 30 70 12 93 22 82 36\nCard 6: 31 18 13 56 72 | 74 77 10 23 35 67 36 11")
    ).toBe("13");
  });
  it(`part2 is identity function`, () => {
    expect(day4.solveForPartTwo("Card 1: 41 48 83 86 17 | 83 86  6 31 17  9 48 53\nCard 2: 13 32 20 16 61 | 61 30 68 82 17 32 24 19\nCard 3:  1 21 53 59 44 | 69 82 63 72 16 21 14  1\nCard 4: 41 92 73 84 69 | 59 84 76 51 58  5 54 83\nCard 5: 87 83 26 28 32 | 88 30 70 12 93 22 82 36\nCard 6: 31 18 13 56 72 | 74 77 10 23 35 67 36 11")).toBe("30");
  });

  describe('parseCards', () => {
    it('should parse a single card correctly', () => {
      const input = 'Card 1: 41 48 83 86 17 | 83 86  6 31 17  9 48 53';
      const expected = [[['41', '48', '83', '86', '17'], ['83', '86', '6', '31', '17', '9', '48', '53']]];
      expect(day4.parseCards(input)).toEqual(expected);
    });
  
    it('should parse multiple cards correctly', () => {
      const input = 'Card 1: 41 48 83 86 17 | 83 86  6 31 17  9 48 53\nCard 2: 13 32 20 16 61 | 61 30 68 82 17 32 24 19';
      const expected = [
        [['41', '48', '83', '86', '17'], ['83', '86', '6', '31', '17', '9', '48', '53']],
        [['13', '32', '20', '16', '61'], ['61', '30', '68', '82', '17', '32', '24', '19']]
      ];
      expect(day4.parseCards(input)).toEqual(expected);
    });
  
    it('should handle empty input', () => {
      const input = '';
      const expected = [];
      expect(day4.parseCards(input)).toEqual(expected);
    });
  
    it('should handle input with no card numbers', () => {
      const input = 'Card 1: 41 48 83 86 17 |';
      const expected = [[['41', '48', '83', '86', '17'], []]];
      expect(day4.parseCards(input)).toEqual(expected);
    });
    
    describe('cardMatches', () => {
      it('should count matches correctly', () => {
        const input = [
          [['41', '48', '83', '86', '17'], ['83', '86', '6', '31', '17', '9', '48', '53']],
          [['13', '32', '20', '16', '61'], ['61', '30', '68', '82', '17', '32', '24', '19']]
        ];
        const expected = [4, 2];
        expect(day4.cardMatches(input)).toEqual(expected);
      });
  
      it('should return 0 for no matches', () => {
        const input = [
          [['41', '48', '83', '86', '17'], ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10']],
          [['13', '32', '20', '16', '61'], ['21', '22', '23', '24', '25', '26', '27', '28', '29', '30']]
        ];
        const expected = [0, 0];
        expect(day4.cardMatches(input)).toEqual(expected);
      });
  
      it('should handle empty input', () => {
        const input = [];
        const expected = [];
        expect(day4.cardMatches(input)).toEqual(expected);
      });
  
      it('should handle input with no card numbers', () => {
        const input = [[['41', '48', '83', '86', '17'], []]];
        const expected = [0];
        expect(day4.cardMatches(input)).toEqual(expected);
      });
    });
  });
});
