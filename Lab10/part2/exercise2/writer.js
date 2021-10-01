
const fs = require('fs')

// create file write stream for existing or new file
const file = fs.createWriteStream('./writer.txt')

let writeData = () => {

    // write into the file
    for (let i = 0; i <= 10; i++) {
        file.write('this is some write line text \n')
    }

    // close file
    file.end()

}

// export write data method
module.exports = writeData