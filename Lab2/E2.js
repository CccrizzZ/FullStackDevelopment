
// determine the football points of a given team record
function CalculatePoints(wins, draws, losses){
  return (wins*3 + draws*1)
}

console.log(CalculatePoints(3,4,2))  // 13
console.log(CalculatePoints(5,0,2))  // 15
console.log(CalculatePoints(0,0,1))  // 0
