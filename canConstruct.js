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

const canConstructTable = (targetWord, wordBank) => {
    const table = Array(targetWord.length + 1).fill(false);
    table[0] = true;

    for(let i = 0; i <= targetWord.length; i++) {
        if (table[i] === true) {
            for(let word of wordBank) {
                if (targetWord.slice(i, i + word.length) === word) {
                    table[i + word.length]= true;

                }
            }
        }
    }

    return table[targetWord.length];
};

console.log(canConstruct('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd'])); //true
console.log(canConstruct('skateboard', ['bo', 'rd', 'ate', 't', 'ska', 'sk', 'boar']));
console.log(canConstruct('enterapotentpot', ['a', 'p', 'ent', 'enter', 'ot', 'o', 't']));
console.log(canConstruct('eeeeeeeeeeeeeeeeeeeeeeeeeeef', ['e', 'ee', 'eee', 'eeee', 'eeeee', 'eeeeee', 'eeeeeee']));

console.log('table');
console.log(canConstructTable('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd'])); //true
console.log(canConstructTable('skateboard', ['bo', 'rd', 'ate', 't', 'ska', 'sk', 'boar']));
console.log(canConstructTable('enterapotentpot', ['a', 'p', 'ent', 'enter', 'ot', 'o', 't']));
console.log(canConstructTable('eeeeeeeeeeeeeeeeeeeeeeeeeeef', ['e', 'ee', 'eee', 'eeee', 'eeeee', 'eeeeee', 'eeeeeee']));