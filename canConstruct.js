const canConstruct = (targetWord, wordBank, memo={}) => {

    if (targetWord in memo) return memo[targetWord];
    if (targetWord === '') return true;
    
    for (let word of wordBank){

        if (targetWord.indexOf(word) === 0) {
            if (canConstruct(targetWord.slice(word.length), wordBank, memo)){
                memo[targetWord] = true;
                return true;
            }
        }
    }

    memo[targetWord] = false;

    return false;
};

console.log(canConstruct('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd'])); //true
console.log(canConstruct('eeeeeeeeeeeeeeeeeeeeeeeeeeef', ['e', 'ee', 'eee', 'eeee', 'eeeee', 'eeeeee', 'eeeeeee']));