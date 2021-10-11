
const newYearChaos = (q) => {
    let bribe = 0;
    for(let i = q.length - 1; i >= 0; i--) {
        if (q[i] === (i + 1)) {
            continue;
        }

        if ((i - 1 >= 0) && q[i - 1] === (i + 1)) {
            bribe += 1;
            swap(q, i, i - 1);
        }
        else if ((i - 2 >= 0) && q[i - 2] === (i + 1)) {
            bribe += 2;
            swap(q, i - 2, i - 1);
            swap(q, i - 1, i);
            //console.log(q);
        }
        else
        {
            return 'Too chaotic';
        }
    }

    return bribe;
};

const swap = (q, a, b) => {
    let temp = q[a];
    q[a] = q[b];
    q[b] = temp;
}



console.log(newYearChaos([1,2,3,5,4,6,7,8]));
console.log(newYearChaos([2,1,5,3,4]));
console.log(newYearChaos([2,5,1,3,4]));
console.log(newYearChaos([1,2,5,3,7,8,6,4]));
