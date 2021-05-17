console.log("Repeated String!")

// https://www.hackerrank.com/challenges/repeated-string/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=warmup&h_r=next-challenge&h_v=zen&h_r=next-challenge&h_v=zen

// There is a string, s, of lowercase English letters that is repeated infinitely. 
// Given an integer, n, find and print the number of letter a's in the first n letters of the infinite string.

// Example

// s = 'abcac'
// n = 10

// The substring we consider is abcacabcac, the first 10 characters of the infinite string. There are 4 occurrences of 'a' in the substring

/*
 * Complete the 'repeatedString' function below.
 *
 * The function is expected to return a LONG_INTEGER.
 * The function accepts following parameters:
 *  1. STRING s
 *  2. LONG_INTEGER n
 */


function repeatedString(s, n) {
    const a = 'a'
    
    // how many a's are in the full string?
    const aCountFullStr = [...s].filter(x => x === a).length
    
    // how many times does s.length divide evenly into n?
    const sIntoN = Math.floor(n/s.length);

    // what is the remainder after evenly dividing?
    const remainder = n % s.length;

    // create sub string with remainder count
    const remainderSubstring = s.substring(0, remainder)
    
    // how many a's are in the remainder?
    const aCountRemainderStr = [...remainderSubstring].filter(x => x === a).length

    const frequencyOfA = ((aCountFullStr * sIntoN) + aCountRemainderStr)

    return frequencyOfA
    
};

console.log("ex1", repeatedString('abcac', 10));
console.log("ex2", repeatedString('aba', 10));
console.log("ex3", repeatedString('a', 1000000000000));
