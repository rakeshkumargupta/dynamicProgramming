const gridChallenge = (grid) => {

    for(let i = 0; i < grid.length; i++) {
        grid[i] = [].slice.call(grid[i].split('')).sort(function (a, b){ return a.localeCompare(b)}).join('');
    }
    
    for(let i = 0; i < grid.length; i++) {
        //console.log(sortStr);
        for(let j = 0; j < grid.length - 1; j++) {
            if (grid[j].charAt(i) > grid[j + 1].charAt(i)) {
                return 'NO';
            }
        }
    }

    return 'YES';
};


console.log(gridChallenge(['abc', 'ade', 'efg']));
console.log(gridChallenge(['ebacd', 'fghij', 'olmkn', 'trpqs', 'xywuv']));
console.log(gridChallenge(['dbc', 'ade', 'efg']));
