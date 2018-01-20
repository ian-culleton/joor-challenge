import fibonacci from '../src/3-fibonacci/fibonacci';

describe('fibonacci', () => {
  it('should exist', () => {
    expect(typeof(fibonacci)).toBe('function')
  })
})

test('fibonacci of 0 should return 0', () => {
    expect(fibonacci(0)).toBe(0)
})

test('fibonacci of 1 should return 1', () => {
    expect(fibonacci(1)).toBe(1)
})

test('fibonacci of 2 should return 1', () => {
    expect(fibonacci(2)).toBe(1)
})

test('fibonacci of 16 should return', () => {
    expect(fibonacci(16)).toBe(987)
})

test('should throw error if number is null', () => {
    const num = null;
    expect(() => fibonacci(num)).toThrow('The number passed in cannot be undefined or null!');
})

test('should throw error if number is undefined', () => {
    const num = undefined;
    expect(() => fibonacci(num)).toThrow('The number passed in cannot be undefined or null!');
})
