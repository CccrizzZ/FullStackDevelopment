
// find odd or even from 0 to 10
function FindOddOrEven() {
  for (let i = 0; i <= 10; i++) {
    console.log(i + " is " + (i % 2 == 0 ? "even" : "odd"))
  }
}

FindOddOrEven()