console.log("Left Rotation!")

// https://www.hackerrank.com/challenges/ctci-array-left-rotation/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=arrays

// A left rotation operation on an array shifts each of the array's elements 1 unit to the left. 
//  For example, if 2 left rotations are performed on array [1, 2, 3, 4, 5], then the array would become [3, 4, 5, 1, 2].
//  Note that the lowest index item moves tot hte highest index in a rotation. This is called a circular array.

//  Given an array a of n integers and a number, d, perform d rotations on the array. 
//  Return the updated array to be printed as a single line of space-separated integers.

function rotLeft(a, d) {
    // rotate d times
    for (let x = d; x > 0; x--) {
        // shift the first element from a
        const shiftedEl = a.shift()
        // push shifted element onto the end of a
        a.push(shiftedEl)
    }
    // return rotated a
    return a
};

console.log("ex1", rotLeft([33, 47, 70, 37, 8, 53, 13, 93, 71, 72, 51, 100, 60, 87, 97], 13));
console.log("ex2", rotLeft([1, 2, 3, 4, 5], 4));