const recursiveDigitSum = (n, k) => {
    let nums = n.toString().split('');

    let totalSum = 0;
    for (let i = 0; i < nums.length; i++) {
        totalSum += parseInt(nums[i]);
    }

    totalSum = totalSum * k;

    if (totalSum < 10) { 
        return totalSum;
    } else {
        return recursiveDigitSum(totalSum, 1);
    }
};


console.log(recursiveDigitSum(9875, 4));
console.log(recursiveDigitSum(9875, 1));