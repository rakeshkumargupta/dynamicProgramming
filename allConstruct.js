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

const allConstructTable = (targetWord, wordBank) => {
    const table = Array(targetWord.length + 1).fill().map(() => []);
    table[0] = [[]];

    for(let i = 0; i <= targetWord.length; i++) {
        if (table[i] !== []) {
            for(let word of wordBank) {
                if (targetWord.slice(i, i + word.length) === word) {
                    
                    table[i + word.length].push(...table[i].map(a => [...a, word]));
                    
                }
            }
        }
    }

    return table[targetWord.length];
};

console.log(allConstructTable('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd'])); //true
console.log(allConstructTable('skateboard', ['bo', 'rd', 'ate', 't', 'ska', 'sk', 'boar']));
console.log(allConstructTable('enterapotentpot', ['a', 'p', 'ent', 'enter', 'ot', 'o', 't']));
console.log(allConstructTable('eeeeeeeeeeeeeeeeeeeeeeeeeeef', ['e', 'ee', 'eee', 'eeee', 'eeeee', 'eeeeee', 'eeeeeee']));

console.log('tree');
console.log(allConstruct('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd'])); //true
console.log(allConstruct('skateboard', ['bo', 'rd', 'ate', 't', 'ska', 'sk', 'boar']));
console.log(allConstruct('enterapotentpot', ['a', 'p', 'ent', 'enter', 'ot', 'o', 't']));
console.log(allConstruct('eeeeeeeeeeeeeeeeeeeeeeeeeeef', ['e', 'ee', 'eee', 'eeee', 'eeeee', 'eeeeee', 'eeeeeee']));