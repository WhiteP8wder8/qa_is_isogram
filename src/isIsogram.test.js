// eslint-disable-next-line strict
describe('isIsogram', () => {
  const { isIsogram } = require('./isIsogram');

  it('should be declared', () => {
    expect(isIsogram).toBeInstanceOf(Function);
  });

  it('should return true for "playgrounds"', () => {
    expect(isIsogram('playgrounds')).toBe(true);
  });

  it('should return false for "look"', () => {
    expect(isIsogram('look')).toBe(false);
  });

  it('should return false for "Adam" (case-insensitive)', () => {
    expect(isIsogram('Adam')).toBe(false);
  });

  it('should return true for empty string', () => {
    expect(isIsogram('')).toBe(true);
  });

  it('should return false for "Oops"', () => {
    expect(isIsogram('Oops')).toBe(false);
  });
});
