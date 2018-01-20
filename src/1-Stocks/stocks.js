import stocksData from './stocks.data'

export const getMaxProfit = (data) => {

    if (data === null || data === undefined || data.length < 2) {
        throw new Error('Data must not be null or undefined and is greater than 2!');
    }

    // we are always comparing the current price to the lowest price
    // we can set the lowest price to be the first stock price
    let lowestPrice = data[0];
    //set max profit to the first instance we can buy and sell our stocks
    //if we set max profit to zero then our max profit would always be 0 in the case
    //where our stock prices go down all day
    let maxProfit = data[1] - data[0];

    //we start at the second index because we can't buy and sell at the same time
    for (let i = 1; i < data.length; i++) {
        let currentPrice;
        let tempProfit;
        //set current price
        currentPrice = data[i];

        //calculate the profit of lowest and current price
        tempProfit = currentPrice - lowestPrice;

        //we update lowestPrice if the currentPrice is lower
        lowestPrice = lowestPrice > currentPrice ? currentPrice : lowestPrice;

        //set maxProfit to tempProfit if tempProfit is higher
        maxProfit = tempProfit > maxProfit ? tempProfit : maxProfit;
    }

    return maxProfit;
}

export const stocksProblemOutput = getMaxProfit(stocksData)
export default getMaxProfit;
