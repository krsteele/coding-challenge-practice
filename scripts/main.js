console.log("Hash Tables: Ransom Note");

// https://www.hackerrank.com/challenges/ctci-ransom-note/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=dictionaries-hashmaps

/*
    Harold is a kidnapper who wrote a ransom note, but now he is worried it will be traced back to him through his handwriting. 
    He found a magazine and wants to know if he can cut out whole words from it and use them to create an untraceable replica of his ransom note. 
    The words in his note are case-sensitive and he must use only whole words available in the magazine. 
    He cannot use substrings or concatenation to create the words he needs.

    Given the words in the magazine and the words in the ransom note, print Yes if he can replicate his ransom note exactly using 
    whole words from the magazine; otherwise, print No.

    parameters: 
    
    magazine[m]: a string of the words in the magazine
    note[n]: a string of the words in the ransom note

    return:

    a string: either Yes or No, no return value is expected

*/

function checkMagazine(magazine, note) {
    // Write your code here

};

console.log("ex1", checkMagazine(["give", "me", "one", "grand", "today", "night"], ["give", "me", "one", "grand", "today"])) // Yes
console.log("ex2", checkMagazine(["two", "times", "three", "is", "not", "four"], ["two", "times", "two", "is", "four"])) // No
console.log("ex3", checkMagazine(["ive", "got", "a", "lovely", "bunch", "of", "coconuts"], ["ive", "got", "some", "coconuts"])) // No
console.log("ex4", checkMagazine(["attack", "at", "dawn"], ["Attack", "at", "dawn"])) // No
