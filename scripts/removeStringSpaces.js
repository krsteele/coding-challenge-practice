console.log("Remove String Spaces")
// https://www.codewars.com/kata/57eae20f5500ad98e50002c5/train/javascript

// Remove the spaces from the string, then return the resultant string

function noSpace(x){
    const y = x.split(' ').join('')
    return y
}

console.log(noSpace('8 j 8   mBliB8g  imjB8B8  jl  B'))
console.log(noSpace('8 8 Bi fk8h B 8 BB8B B B  B888 c hl8 BhB fd'))
console.log(noSpace('8aaaaa dddd r     '))