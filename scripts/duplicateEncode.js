console.log("Duplicate Encoder!");

// https://www.codewars.com/kata/54b42f9314d9229fd6000d9c/train/javascript

/*  
        
        The goal of this exercise is to convert a string to a new string where each 
        character in the new string is "(" if that character appears only once in the 
        original string, or ")" if that character appears more than once in the original string. 
        Ignore capitalization when determining if a character is a duplicate.

*/

function duplicateEncode(word) {
    // construct an empty map to hold a map of the frequency of each letter in word
    let freq = new Map()

    // iterate through the characters in word
    for (let ch of word) {
        // store the lowercase value of each ch in char
        let char = ch.toLowerCase()
        // if freq already contains a key matching the current char, increment the value of the matching key, else set the key with a value of 1
        freq.has(char) ? freq.get(char).val++ : freq.set(char, {val: 1})

        // console.log("freq", freq)
    }
    // declare a variable to hold our encoded string and set the value to an empty string
    let encoded = ""

    // iterate through the characters in word
    for (let ch of word) {
        // store the lowercase value of each ch in char
        let char = ch.toLowerCase()
        // if the key in freq matching the current char has a value greater than 1, add a ")" to encoded, else add a "("
        freq.get(char).val > 1 ? encoded += ")" : encoded += "("

    }

    return encoded
}


// function duplicateEncode(word) {
//     let freq = {}

//     for (let ch of word) {
//         // console.log("ch", ch)
        
//         let char = ch.toLowerCase()

//         freq.hasOwnProperty(char) ? freq.char + 1 : freq.char = 1



//         // console.log("char", char);
//         console.log("freq", freq)

    //     (freq[char]) ? freq[char]++ || 0 : freq[char] = 1
    // }

    // let encoded = ""
    
    // for (let i of word) {

    //     if (freq.word[i] > 1) {

    //         encoded.concat(")")
    //     } else {
    //         encoded.concat("(")
    //     }

    // }
    // return encoded
// }


console.log("ex1", duplicateEncode("din"))
console.log("ex2", duplicateEncode("recede"))
console.log("ex3", duplicateEncode("Success"))
console.log("ex4", duplicateEncode("(( @"))
// duplicateEncode("Success")