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

const countConstructTable = (targetWord, wordBank) => {
    const table = Array(targetWord.length + 1).fill(0);
    table[0] = 1;

    for(let i = 0; i <= targetWord.length; i++) {
        if (table[i] > 0) {
            for(let word of wordBank) {
                if (targetWord.slice(i, i + word.length) === word) {
                    table[i + word.length] += table[i];
                }
            }
        }
    }

    return table[targetWord.length];
};

console.log(countConstructTable('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd'])); //true
console.log(countConstructTable('skateboard', ['bo', 'rd', 'ate', 't', 'ska', 'sk', 'boar']));
console.log(countConstructTable('enterapotentpot', ['a', 'p', 'ent', 'enter', 'ot', 'o', 't']));
console.log(countConstructTable('eeeeeeeeeeeeeeeeeeeeeeeeeeef', ['e', 'ee', 'eee', 'eeee', 'eeeee', 'eeeeee', 'eeeeeee']));

console.log('tree');
console.log(canConstruct('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd'])); //true
console.log(canConstruct('skateboard', ['bo', 'rd', 'ate', 't', 'ska', 'sk', 'boar']));
console.log(canConstruct('enterapotentpot', ['a', 'p', 'ent', 'enter', 'ot', 'o', 't']));
console.log(canConstruct('eeeeeeeeeeeeeeeeeeeeeeeeeeef', ['e', 'ee', 'eee', 'eeee', 'eeeee', 'eeeeee', 'eeeeeee']));