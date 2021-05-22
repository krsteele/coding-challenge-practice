// https://www.hackerrank.com/challenges/climbing-the-leaderboard/problem

/*
    Test cases not passing. 
    myOutput = [8, 5, 3, 1]
    expectedOutput = [6, 4, 2, 1]
*/

/*
 * Complete the 'climbingLeaderboard' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY ranked
 *  2. INTEGER_ARRAY player
 */

function climbingLeaderboard(ranked, player) {
    // combine and sort the arrays
    let combinedArr = ranked.concat(player)
    combinedArr.sort((a, b)=> b-a)
    console.log("combined", combinedArr)
    // remove duplicates by transforming array to set
    const removeDuplicates = new Set(combinedArr)
    // transform set back into array to access index
    const simplifiedScores = Array.from(removeDuplicates)
    console.log("simplified", simplifiedScores)
    // empty array to hold placement of players with new scores
    // let placement = [];
    
    // loop through player array, find matching index, add 1 and push into new array
    const placement = player.map(p => {
       return simplifiedScores.indexOf(p) + 1
    })

    // return new array
    return placement
}

console.log(climbingLeaderboard([100, 90, 90, 80, 75, 60], [50, 65, 77, 90, 102]));