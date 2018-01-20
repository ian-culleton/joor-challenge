import getMaxProfit from '../src/1-stocks/stocks';

describe('getMaxProfit()', ()=> {
  it('should exist', () => {
    expect(typeof(getMaxProfit)).toBe('function')
  })
})

test('returns max profit if stock prices are positive and negative', () => {
    expect(getMaxProfit([2, -3, 4, 6, 10, 3])).toBe(13)
})

test('returns max profit even if stock prices decrease all day', () => {
    expect(getMaxProfit([10, 8, 6, 5, 4])).toBe(-1)
})

test('returns max profit even if stock prices are all negative', () => {
    expect(getMaxProfit([-1, -4, -3, -8, -10])).toBe(1)
})


test('throw error if yesterday stock prices are less than 2 prices', () => {
    const data = [1];
    expect(() => getMaxProfit(data)).toThrow()
})

test('throw error if yesterday stock prices is undefined', () => {
    const data = [];
    expect(() => getMaxProfit(data)).toThrow()
})

test('throw error if yesterday stock prices is null', () => {
    const data = [null];
    expect(() => getMaxProfit(data)).toThrow()
})

test('throw error if stock prices is undefined or null or less than 2', () => {
    expect(getMaxProfit).toThrow('Data must not be null or undefined and is greater than 2!')
})
