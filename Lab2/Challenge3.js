
// map keys and values
function getKeyValuePairs(input) {
    let keys = []
    let values = []

    for (const [key, value] of Object.entries(input)) {
        keys.push(key)
        values.push(value)
    }

    return [keys, values]

}



console.log(getKeyValuePairs({a: 5, b: 10, c: 16}))
console.log(getKeyValuePairs({r: "React", a: "Angular", v: "Vue"}))
console.log(getKeyValuePairs({k1: true, k2: false, k3: undefined}))

