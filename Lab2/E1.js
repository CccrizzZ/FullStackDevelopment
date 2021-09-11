
// determine if the given number is less than or equal to zero
function LessOrEqualToZero(input) {
  return Math.sign(input) == 1 ? false : true
}

console.log(LessOrEqualToZero(5))   // false
console.log(LessOrEqualToZero(0))   // true
console.log(LessOrEqualToZero(-2))  // true