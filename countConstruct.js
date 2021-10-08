const canConstruct = (targetWord, wordBank, memo={}) => {

    if (targetWord in memo) return memo[targetWord];
    if (targetWord === '') return 1;
    
    let totalCount = 0;
    for (let word of wordBank){

        if (targetWord.indexOf(word) === 0) {
            const numWaysForRest = canConstruct(targetWord.slice(word.length), wordBank, memo);
            totalCount += numWaysForRest;
        }
    }

    memo[targetWord] = totalCount;

    return totalCount;
};

console.log(canConstruct('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd'])); //true
console.log(canConstruct('eeeeeeeeeeeeeeeeeeeeeeeeeeef', ['e', 'ee', 'eee', 'eeee', 'eeeee', 'eeeeee', 'eeeeeee']));