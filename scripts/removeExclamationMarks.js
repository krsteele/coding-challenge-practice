console.log("Remove Exclamation Marks!");

 /*  
    Write a function which removes all exclamation marks from a given string

*/

function removeExclamationMarks(s) {
    let noExclamations = "";

    for (let ch of s) {
        if (ch !== "!") {
            noExclamations += ch
        }
    }
    return noExclamations
}

console.log(removeExclamationMarks("Hello World!!!"))