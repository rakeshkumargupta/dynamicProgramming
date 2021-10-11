const truckTour = (petrolpumps) => {

    let petrol = 0;
    let startPoint = -1;
    for(let i = 0; i < petrolpumps.length; i++) {
        petrol = 0;
        if (petrolpumps[i][0] - petrolpumps[i][1] >= 0) {
            startPoint = i;
            for(let j = 0; j < petrolpumps.length; j++) {
                let nextI = i + j;
                if (petrolpumps.length <= nextI) {
                    nextI = nextI - petrolpumps.length;
                }

                petrol += (petrolpumps[nextI][0] - petrolpumps[nextI][1]);
                if (petrol < 0) {
                    startPoint = -1;
                    break;
                }
            }
        }

        if (startPoint > -1) {
            break;
        }
    }

    return startPoint;
};


console.log(truckTour([[1, 5], [10, 3], [3, 4]]));
console.log(truckTour([[2, 5], [3, 4], [3, 5], [10, 3], [3, 4]]));