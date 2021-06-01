console.log("String Repeat!");

// https://www.codewars.com/kata/57a0e5c372292dd76d000d7e

// Write a function called repeatStr which repeats the given string exactly n TimeRanges

function repeatStr (n, s) {

    return s.repeat(n);
    }

console.log(repeatStr(6, "I")) //"IIIIII"
console.log(repeatStr(5, "Hello")) // "HelloHelloHelloHelloHello"
console.log(repeatStr(3, "*"))
console.log(repeatStr(5, "#"))
console.log(repeatStr(2, "ha "))
