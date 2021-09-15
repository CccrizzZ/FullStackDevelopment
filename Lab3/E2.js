
// ES6 syntax
const gretter = (myArray) => {
    let greetText = ' Hello '
    for (const item of myArray) {
        console.log(greetText + item);
    }
}

gretter(['R Savage', 'R Flair', 'H Hogan'])
