import reverseWords from '../src/2-reversewords/reverseWords';

describe('reverseWords()', () => {
  it('should exist', () => {
    expect(typeof(reverseWords)).toBe('function')
  })
})

test('people are strange should be strange are people', () => {
  expect(reverseWords('people are strange')).toBe('strange are people')
})

test('throw error if message is less than one word', () => {
    const message = "hello"
    expect(() => reverseWords(message)).toThrow()
})

test('the return value should be defined', () => {
    const message = "hello people"
    expect(reverseWords(message)).toBeDefined();
})

test('message should not be null', () => {
    const message = null;
    expect(() => reverseWords(message)).toThrow('Message cannot be null or undefined!');
})

test('message should not be undefined', () => {
    const message = undefined;
    expect(() => reverseWords(message)).toThrow('Message cannot be null or undefined!');
})

test('the return message should only return letters and spaces', () => {
    const message = 'hi hi hi hi hi'
    expect(reverseWords(message)).toMatch(/^[a-zA-Z\s]*$/)
})
