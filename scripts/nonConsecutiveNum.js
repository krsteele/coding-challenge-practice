console.log("first non-consecutive number");

// https://www.codewars.com/kata/58f8a3a27a5c28d92e000144

function firstNonConsecutive (arr) {
    for (let i = 0; i < arr.length-1; i++) {
        if (arr[i+1] > (arr[i] + 1)) {
            return arr[i+1]
        } 
    };
    return null
};

console.log("ex1", firstNonConsecutive([1, 2, 3, 4, 6, 7, 8]));
// console.log("ex2", firstNonConsecutive([1, 2, 3, 4]));

