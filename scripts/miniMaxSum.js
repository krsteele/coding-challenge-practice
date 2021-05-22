// https://www.hackerrank.com/challenges/mini-max-sum/problem

/*

    All test cases passed, but one --> [5, 5, 5, 5, 5]

*/

function miniMaxSum(arr) {
    // reducer function for adding arrays
    const reducer = (a, b) => a + b
    // find the lowest num in arr
    const arrMin = Math.min(...arr)
    // filter arr for nums greater than arrMin, then sum
    const maxSum = arr.filter(n => n > arrMin).reduce(reducer)
    
    // find the highest num in arr
    const arrMax = Math.max(...arr)
    // filter arr for nums less than arrMax, then sum
    const minSum = arr.filter(n => n < arrMax).reduce(reducer)

    // print min and max sums in space-separated string
    console.log(`${minSum} ${maxSum}`)
    
}
// console.log(minSum + " " + maxSum)

miniMaxSum([1, 2, 3, 4, 5]);
console.log(miniMaxSum([7, 69, 2, 221, 8974]))