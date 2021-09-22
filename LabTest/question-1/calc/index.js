


module.exports = {
  multiplyTwoNumbers : (x, y) => {
    
    if (typeof(x) != "number" || typeof(y) != "number") {
      throw 'Error: both input must be numbers!'
    }

    return x * y
  },

  evenDoubler : (x) => {
    if (x % 1 != 0 || typeof(x) != "number") {
      throw 'Error: input is not an integer'
    }

    return x % 2 == 0 ? x ** 2 : 0 

  }
}

// console.log(multiplyTwoNumbers("aa","a"))  // err
// console.log(multiplyTwoNumbers(2,12))
// console.log(evenDoubler(9))
// console.log(evenDoubler(12))
// console.log(evenDoubler(2.5))  // err
// console.log(evenDoubler("abc"))  // err


// export {multiplyTwoNumbers, evenDoubler}

