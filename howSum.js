const howSum = (targetSum, numbers, memo = {}) => {
    if (targetSum in memo) return memo[targetSum];
    if (targetSum === 0) return [];
    if (targetSum < 0) return null;

    for (let num of numbers){
        const remainder = targetSum - num;
        const reminderResult = howSum(remainder, numbers, memo);

        if (reminderResult !== null){
            memo[targetSum] = [...reminderResult, num];
            return memo[targetSum];
        }
    }

    memo[targetSum] = null;
    return null;

}

const howSumTable = (targetSum, numbers) => {
    var table = Array(targetSum + 1).fill(null);
    table[0] = [];

    for(let i = 0; i <= targetSum; i++) {
        if (table[i] !== null){
            for (let j = 0; j < numbers.length; j++) {
                if (i + numbers[j] <= targetSum) {
                    table[numbers[j] + i] = [ ...table[i], numbers[j] ];
                }
            }
        }
    }

    return table[targetSum];
};

console.log(howSum(7, [2 , 3]));
console.log(howSum(7, [5, 3, 4]));
console.log(howSum(7, [2, 4]));
console.log(howSum(8, [2, 3, 5]));
console.log(howSum(300, [7, 14]));

console.log('tree');
console.log(howSumTable(7, [2 , 3]));
console.log(howSumTable(7, [5, 3, 4]));
console.log(howSumTable(7, [2, 4]));
console.log(howSumTable(8, [2, 3, 5]));
console.log(howSumTable(300, [7, 14]));
