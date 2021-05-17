console.log("Jumping on the Clouds!")

// https://www.hackerrank.com/challenges/jumping-on-the-clouds/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=warmup&h_r=next-challenge&h_v=zen

// There is a new mobile game that starts with consecutively numbered clouds. 
// Some of the clouds are thunderheads and others are cumulus. 
// The player can jump on any cumulus cloud having a number that is equal to the number of the current cloud plus 1 or 2.
// The player must avoid the thunderheads. Determine the minimum number of jumps it will take to jump from the starting postion 
// to the last cloud. It is always possible to win the game.

// For each game, you will get an array of clouds numbered 0 if they are safe or 1 if they must be avoided.

// Example

// c=[0, 1, 0, 0, 0, 1, 0]

// Index the array from 0...6. The number on each cloud is its index in the list so the player must avoid the clouds at indices 1 and 5.
// They could follow these two paths:  0 -> 2 -> 4 -> 6 or 0 -> 2 -> 3 -> 4 -> 6. The first path takes 3 jumps while the second takes 4. Return 3.

// Function Description

// Complete the jumpingOnClouds function in the editor below.

// jumpingOnClouds has the following parameter(s):

// - int c[n]: an array of binary integers

// Returns

// int: the minimum number of jumps required

// Input Format

// The first line contains an integer n, the total number of clouds. 
// The second line contains n space-separated binary integers describing clouds c[i] where 0<=i<n.

const clouds1 = [0, 0, 1, 0, 0, 1, 0];
const clouds2 = [0, 0, 0, 0, 1, 0];

function jumpingOnClouds(c) {
    // jump counter
    let numOfJumps = 0;
    // index counter
    let iCounter = 0;
    
    for (let i = iCounter; i < c.length - 1; i = iCounter) {
        // if you can jump two spots, do it and increment the index accordingly!
        if (c[i+2] === 0) {
            iCounter += 2;
            
        } else {
            // otherwise, just jump to the next cloud
            iCounter += 1
        }
        // either way, you jumped, so add that to our jump counter
        numOfJumps++
    }
    return numOfJumps
};

console.log("clouds1", jumpingOnClouds(clouds1));
console.log("clouds2", jumpingOnClouds(clouds2));
