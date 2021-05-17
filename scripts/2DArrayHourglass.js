console.log("hourglass")
// https://www.hackerrank.com/challenges/2d-array/problem


// There are 16 hourglasses in arr. An hourglass sum is the sum of an hourglass' values. 
// Calculate the hourglass sum for every hourglass in arr, then print the maximum hourglass sum. 
// The array will always be 6x6.

const arr = [
    [ 1, 1, 1, 0, 0, 0 ],
    [ 0, 1, 0, 0, 0, 0 ],
    [ 1, 1, 1, 0, 0, 0 ],
    [ 0, 0, 2, 4, 4, 0 ],
    [ 0, 0, 0, 2, 0, 0 ],
    [ 0, 0, 1, 2, 4, 0 ]
  ]

function hourglassSum(arr) {
    
    let maxSum = -63; // -9 * 7 = lowest possible num per constraints
    
    // iterate through arr
    for (let i=0; i < 4; i++) {
        for (let j=0; j < 4; j++) {
            // var to hold each hourglass as it's being built
            let currentHourglass = []
            
            // iterate through current hourglass block
            for (let r = i; r < i+3; r++) {
                // if it's the second line of the block, push only center num to currentBlock
                if (r == i+1) {
                    currentHourglass.push(arr[r][j+1])
                } else {
                    // otherwise, push each num
                    for (let c = j; c < j+3; c++) {
                        currentHourglass.push(arr[r][c])
                    }
                }
            }
            // find the sum of the int in currentHourglass array
            const reducer = (accumulator, currentValue) => accumulator + currentValue;
            const currentHourglassSum = currentHourglass.reduce(reducer);
            // if the currentHourglassSum is greater than the current maxSum, set new maxSum
            if (currentHourglassSum >= maxSum) {
                maxSum = currentHourglassSum;
            };
            // reset currentHourglass to empty array to prepare to build next hourglass
            currentHourglass = []
        }

    }
    return maxSum
};

console.log("final", hourglassSum(arr));