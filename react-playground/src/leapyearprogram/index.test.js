// Use this line to import the function, made possible by
// the export default line in the other file
import leapYear  from './index';

it('should be a leap year if divisible by 4, not 100', () => {
    const input = 1984;
    const expectedOutput = true;
    const actualOutput = leapYear(input);
    expect(actualOutput).toBe(expectedOutput);
  });
