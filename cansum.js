const canSum = (targetSum, numbers, memo = {}) => {
    if (targetSum in memo) return memo[targetSum];
    if (targetSum === 0) return true;
    if (targetSum < 0) return false;

    for (let num of numbers){
        const remainder = targetSum - num;
        if (canSum(remainder, numbers, memo) === true){
            memo[targetSum] = true;
            return true;
        }
    }

    memo[targetSum] = false;
    return false;

};

const canSumTable = (targetSum, numbers) => {
    var table = Array(targetSum + 1).fill(false);
    table[0] = true;

    for(let i = 0; i <= targetSum; i++) {
        if (table[i] === true){
            for (let j = 0; j < numbers.length; j++) {
                if (i + numbers[j] <= targetSum) {
                    table[numbers[j] + i] = true;
                }
            }
        }
    }

    return table[targetSum];
};


console.log(canSum(2, [1 , 3]));
console.log(canSum(8, [2, 3, 5]));
console.log(canSum(300, [7, 14]));
console.log('tree');
console.log(canSumTable(2, [1 , 3]));
console.log(canSumTable(8, [2, 3, 5]));
console.log(canSumTable(300, [7, 14]));
