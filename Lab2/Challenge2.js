
// reverse array
// function ReverseIt(myArr) {
//     return myArr.reverse()
// }

function ReverseIt(myArr) {
    let temp = []
    for (let i = myArr.length - 1; i >= 0; i--) {
        temp.push(myArr[i])
    }
    myArr = temp
    return myArr
}


console.log(ReverseIt([1,2,3,4,5]))
console.log(ReverseIt(['A','B','C','D','E']))
console.log(ReverseIt([]))
