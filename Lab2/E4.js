
// hello world function
function HWorlds(input) {
  typeof(input) == "number" ? console.log("Hello World \n".repeat(input)) : console.log("Goodbye World")
}

HWorlds(6)
HWorlds("Hello")
HWorlds(null)
HWorlds(undefined)
HWorlds(true)

