// 3-Fibonacci
// Instructions can be found in src/3-Fibonacci/Fibonacci Instructions.md

export const fibonacci = (num) => {

    if (num === null || num === undefined) {
        throw new Error('The number passed in cannot be undefined or null!');
    }
    //our base case
    if (num === 0) {
        return 0;
    //if n is equal to or less than 2 return 1
    } else if (num <= 2) {
        return 1;
    }

    //we recursively call the function and storing the return value of each call in a stack until the base case is reached, then we unwind and add up the returned value from each stack
    return fibonacci(num - 1) + fibonacci(num - 2);
}

export const fibonacciProblemOutput = fibonacci(16)
export default fibonacci;
