
// random size
function GreaterThanSize() {
  let size = Math.round((Math.random() * 100))
  
  let i = 1
  while (i <= size) {
    console.log("The current size is " + size + " and count is " + i)
    i++
  }

}

GreaterThanSize()