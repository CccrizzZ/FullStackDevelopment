
// progress bar
// import ProgressBar from 'progress'
// import chalk from 'chalk'

let ProgressBar = require('progress')
let chalk = require('chalk')


// construct new progress bar
let downloadBar = new ProgressBar(
  'Downloading [:bar] :percent :etas',                         // bar format
  {total: 20, incomplete: ' ', complete: chalk.bgGreen(' ')}   // progress options
)

module.exports = {
  // will be called in app.js
    startProgress: () => {
    
    // start the tick
    console.log(chalk.green("Download --> Started"))
    let barTick = setInterval(() => {
      
      // tick bar
      downloadBar.tick()

      // clear interval if bar tick finished
      if (downloadBar.complete) {
        clearInterval(barTick)
        console.log(chalk.green("Download --> Completed"))
      }
    }, 500)  // 500ms per tick
  }

}


// export {startProgress}