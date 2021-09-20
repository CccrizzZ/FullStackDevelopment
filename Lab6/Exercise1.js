


counter = 10
let timer = setInterval(() => {
    if (counter == 0) {
        console.log("time is up")
        clearInterval(timer)
    }else{
        console.log(counter)
        counter--
    }
}, 1000);