const fib = (n) => {
    const table = Array(n + 1).fill(0);
    table[1] = 1;
    for(let i = 0; i <= n; i++) {
        table[i + 1] += table[i];

        table[i + 2] += table[i];
    }

    return table[n];
};

const fibTree = (n, memo={}) => {

    if (n  in memo) return memo[n];
    if (n === 2) return 1;
    if (n === 1) return 1;

    let totalNum = 0;
    totalNum = fibTree(n - 1, memo) + fibTree(n - 2, memo);

    memo[n] = totalNum;
    return totalNum;

};


console.log(fib((6)));
console.log(fib((7)));
console.log(fib((6)));
console.log(fib((50)));

console.log('Tree');
console.log(fibTree((6)));
console.log(fibTree((7)));
console.log(fibTree((6)));
console.log(fibTree((50)));
