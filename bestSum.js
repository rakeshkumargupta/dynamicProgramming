const bestSum = (targetSum, numbers, memo = {}) => {
    if (targetSum in memo) return memo[targetSum];
    if (targetSum === 0) return [];
    if (targetSum < 0) return null;

    let shortestCombitnation = null;
    for (let num of numbers){
        const remainder = targetSum - num;
        const reminderResult = bestSum(remainder, numbers, memo);

        if (reminderResult !== null){
            const combination = [ ...reminderResult, num ];
            if (shortestCombitnation === null || combination.length < shortestCombitnation.length){
                shortestCombitnation = combination;
            }
            
        }
    }

    memo[targetSum] = shortestCombitnation;
    return shortestCombitnation;

};

const bestSumTable = (targetSum, numbers) => {
    var table = Array(targetSum + 1).fill(null);
    table[0] = [];

    for(let i = 0; i <= targetSum; i++) {
        if (table[i] !== null){
            for (let j = 0; j < numbers.length; j++) {
                if (i + numbers[j] <= targetSum) {
                    if (!table[numbers[j] + i] || table[numbers[j] + i].length > (table[i].length + 1)){
                        table[numbers[j] + i] = [ numbers[j], ...table[i] ];
                    }
                }
            }
        }
    }

    return table[targetSum];
};


console.log(bestSum(7, [5, 3, 4, 7]));
console.log(bestSum(8, [2, 3, 5]));
console.log(bestSum(8, [1, 4, 5]));
console.log(bestSum(100, [1, 2, 5, 25]));

console.log('table');
console.log(bestSumTable(7, [5, 3, 4, 7]));
console.log(bestSumTable(8, [2, 3, 5]));
console.log(bestSumTable(8, [1, 4, 5]));
console.log(bestSumTable(100, [1, 2, 5, 25]));
