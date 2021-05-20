console.log("Two Strings!");

// https://www.hackerrank.com/challenges/two-strings/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=dictionaries-hashmaps

/*  
    Given two strings, determine if they share a common substring. A substring may be as small as one character.

    Takes two params, both strings: s1 and s2

    Returns: string either "YES" or "NO"
    
*/

function twoStrings(s1, s2) {
    // convert strings to sets
    const set1 = new Set(s1)
    // console.log("set1", set1)
    
    const set2 = new Set(s2)
    // console.log("set2", set2)

    // find intersection
    let _intersection = new Set()

    for (let ch of set2) {
        if (set1.has(ch)) {
            _intersection.add(ch)
        }
    }

    // if intersection YES, else NO
    if (_intersection.size > 0) {
        return "YES"
    } else {
        return "NO"
    }

}

console.log("ex1", twoStrings("hello", "world"));
console.log("ex2", twoStrings("hi", "world"));
console.log("ex3", twoStrings("wouldyoulikefries", "abcabcabcabcabcabc"));
console.log("ex4", twoStrings("hackerrankcommunity", "cdecdecdecde"));
console.log("ex5", twoStrings("jackandjill", "wentupthehill"));
console.log("ex6", twoStrings("writetoyourparents", "fghmqzldbc"));