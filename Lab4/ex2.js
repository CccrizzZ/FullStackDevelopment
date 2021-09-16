const moment = require('moment')

const getCurrentDate = () => {
    let wrapped = moment(new Date())

    console.log(wrapped.format("dddd") + ', ' + wrapped.format("MMMM Do YYYY, h:mm:ss a"))


}

getCurrentDate()