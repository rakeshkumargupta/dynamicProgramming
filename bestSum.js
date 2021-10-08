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

}


console.log(bestSum(7, [5, 3, 4, 7]));
console.log(bestSum(8, [2, 3, 5]));
console.log(bestSum(8, [1, 4, 5]));
console.log(bestSum(100, [1, 2, 5, 25]));
