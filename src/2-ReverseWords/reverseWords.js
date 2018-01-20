// 2-ReverseWords
// Instructions can be found in src/3-ReverseWords/Reverse Words Instructions.md

var message = 'find you will pain only go you recordings security the into if';

export const reverseWords = (message) => {

    if (message === null || message === undefined) {
        throw new Error('Message cannot be null or undefined!');
    }

    //making all the words lowercase for stylistic purposes
    let splitWords = message.toLowerCase().split(' ');

    if (splitWords.length < 2) {
        throw new Error('Message must be more than one word!');
    }

    //we start with swapping the first and the last index and work our way towards the middle until all the words in the array are swapped
    for (let i = 0, j = splitWords.length - 1; i < j, j > i; i++, j--) {
        let temp = splitWords[i];
        splitWords[i] = splitWords[j];
        splitWords[j] = temp;
    }

    return splitWords.join(' ');
}

export const reverseWordsProblemOutput = reverseWords(message)
export default reverseWords;
