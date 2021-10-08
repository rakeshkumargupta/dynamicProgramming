const allConstruct = (targetWord, wordBank, memo={}) => {

    if (targetWord in memo) return memo[targetWord];
    if (targetWord === '') return [[]];
    
    const result = [];
    for (let word of wordBank){

        if (targetWord.indexOf(word) === 0) {
            const suffixWays = allConstruct(targetWord.slice(word.length), wordBank, memo);
            const targetWays = suffixWays.map(way => [ word, ...way]); 
            result.push(...targetWays);
        }
    }

    memo[targetWord] = result;

    return result;
};

console.log(allConstruct('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd', 'ef'])); //true
console.log(allConstruct('eeeeeeeeeeeeeeeeeeeeeeeeeeef', ['e', 'ee', 'eee', 'eeee', 'eeeee', 'eeeeee', 'eeeeeee']));