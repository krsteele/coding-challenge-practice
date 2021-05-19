console.log("New Year Chaos!");

// https://www.hackerrank.com/challenges/new-year-chaos/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=arrays&h_r=next-challenge&h_v=zen

// It is New Year's Day and people are in line for the Wonderland rollercoaster ride. 
// Each person wears a sticker indicating their initial position in the queu from 1 to n. 
// Any person can bribe the person directly in front of them to swap positions, but htey still wear their original sticker. 
// One person can bribe at most two others.

// Determine the minimum number of bribes that took place to get to a given queue order. 
// Print the number of bribes, or, if anyone has bribed more than two people, print "Too chaotic"

/*  
    Example------------------

    q = [1, 2, 3, 4, 5, 6, 7, 8]

    if person 5 bribes person 4, the queue will look like this: 1, 2, 3, 5, 4, 6, 7, 8. Only 1 bribe is required. Print 1.

    q = 4, 1, 2, 3

    Person 4 had to bribe 3 people to get to the current position. Print "Too chaotic" 
*/

/* 
    Function Description-------------------

    Complete the function minimumBribes in the editor below. 

    minimumBribes has the following parameter:

    int q[n]: the positions of the people after all bribes

    Returns---------------------

    No value is returned. Print the minimum number of bribes necessary or "Too chaotic" if someone has bribed more than 2 people.

*/

function minimumBribes(q) {
    let numOfBribes = 0;
    
    
    // iterate through q backwards
    for (let i = q.length-1; i >=0; i--) {

        const diff = ((q[i]-1)-i)
        console.log("index", i, "num", q[i], "diff", diff)
        if (diff > 2) {
            console.log("Too chaotic");
            return;
        } else if (diff > 0) {
            
            numOfBribes += diff;
        } else if (q[i] >= i && q[i] > q[i+1]) {
            
            numOfBribes += Math.abs(diff);
        }
        
        console.log("numOfBribes", numOfBribes)
    }
    
    console.log(numOfBribes)
};

// console.log("ex1", minimumBribes([2,1,5,3,4]));
// console.log("ex2", minimumBribes([2,5,1,3,4]));
// console.log("ex3", minimumBribes([5,1,2,3,7,8,6,4]));
console.log("ex4", minimumBribes([1,2,5,3,7,8,6,4]));
// console.log("ex5", minimumBribes([1,2,5,3,4,7,8,6]));
// console.log("ex6", minimumBribes([1,2,3]));

// [1, 4, 2, 3, 5]
// [1, 4, 5, 2, 3]