console.log("Gravity Flip")

// https://www.codewars.com/kata/5f70c883e10f9e0001c89673

const gravityR = (a, b) => {
    return a-b
}

const gravityL = (a, b) => {
    return b-a
}

const flip=(d, a)=>{
    // R - sort asc
    // L - sort desc
    if (d === "R"){
        a.sort(gravityR)
    } else if (d === "L"){
        a.sort(gravityL)
    } else {
        return "Incorrect input"
    }

    return a
  }


console.log(flip('R', [3, 2, 1, 2])); // [1, 2, 2, 3]
console.log(flip('L', [1, 4, 5, 3, 5])); // [5, 5, 4, 3, 1]
console.log(flip('P', [4, 6, 3, 1]))
console.log(flip('R', [13, 2, 4, 7, 93]))