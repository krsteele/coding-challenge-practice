console.log("minimum swaps 2!");

// https://www.hackerrank.com/challenges/minimum-swaps-2/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=arrays

/* 
    You are given an unordered array consisting of consecutive integers without any duplicates. You are allowed to swap any two elements. 
    Find the minimum number of swaps required to sort the array in ascending order.

    Example

    arr = [7,1,3,2,4,5,6]

    Perform the following steps:

    i   arr                 swap (indices)
    0   [[7,1,3,2,4,5,6]]   swap (0, 3)
    1   [2,1,3,7,4,5,6]     swap (0, 1)
    2   [1,2,3,7,4,5,6]     swap (3, 4)
    3   [1,2,3,4,7,5,6]     swap (4, 5)
    4   [1,2,3,4,5,7,6]     swap (5, 6)
    5   [1,2,3,4,5,6,7]

    It took 5 swaps to sort the array

    Function Description

    Complete the function minimumSwaps 

    minimumSwaps has the following parameters:

    -int arr[n]: an unordered array of integers

    Returns

    - int: the minimum number of swaps to sort the array


*/


function minimumSwaps(arr) {


}

console.log("ex1", minimumSwaps([4, 3, 1, 2])) // 3
console.log("ex2", minimumSwaps([2, 3, 4, 1, 5])) // 3
console.log("ex3", minimumSwaps([1, 3, 5, 2, 4, 6, 7])) // 3
