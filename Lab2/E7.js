
// city objects
function FindFacts(obj) {
  console.log(obj.name + " has a population of " + obj.population + " and is located in " + obj.continent)
}

let Toronto = {
  name : "Toronto",
  population: "6,100,000",
  continent: "North America"
}

let Vancouver = {
  name : "Vancouver",
  population: "1,400,000",
  continent: "North America"
}

FindFacts(Toronto)
FindFacts(Vancouver)
