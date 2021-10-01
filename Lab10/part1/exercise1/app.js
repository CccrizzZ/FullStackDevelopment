
const buffer_array = Buffer.from([8,6,7,5,3,0,9])

const buffer_string = Buffer.from("I'm a string!", "utf-8")


console.log(buffer_array)
console.log(buffer_string)
console.log(buffer_string.toString())                        // to string
console.log(buffer_string.toString('hex'))                  // to hex
console.log(buffer_string.toString('utf-8').slice(0,10))   // to utf8
console.log(Buffer.concat([buffer_array, buffer_string])) // concate 2 buffer data
console.log(JSON.stringify(Buffer.concat([buffer_array, buffer_string])))  // to JSON