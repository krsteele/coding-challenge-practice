

// sum them all

function arraySum(numbers) {
    // reducer function
    const reducer = (a, b) => a + b;
    // sum all int in numbers array using reduce array method with reducer function
    const sum = numbers.reduce(reducer)
    
    return sum
};

console.log("ex1", arraySum([1, 2, 3, 4, 5]))
console.log("ex1", arraySum([12, 12]))