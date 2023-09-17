// Get form by Id
let Form = document.getElementById("form")
let one = document.querySelector(".results .one span")
let two = document.querySelector(".results .two span")
let three = document.querySelector(".results .three span")


Form.onsubmit = function (){
    // Get the Id of each input, and get each input value
    let userDay = document.getElementById("d").value
    let userMonth = document.getElementById("m").value
    let userYear = document.getElementById("y").value

    // Active the Age function
    Age(userMonth, userDay, userYear)

    // So the form unsent the request
    return false
}

// Age calc function
function Age(month, day, year){
    // User Birth Day
    let userDate = new Date(`${month} ${day} ${year}`)

    // Get user date with milliseconds
    let userMilliSeconds = Date.parse(userDate)
    // Get current date wtith milliseconds
    let userAge = Date.now() - userMilliSeconds
    // Get user age with days
    let d = userAge / 1000 / 60 / 60 / 24
    // Get user age with days
    let m = d / 30
    // Get user age with days
    let y = d / 365

    one.innerHTML = d.toFixed();
    two.innerHTML = m.toFixed();
    three.innerHTML = y.toFixed();

    // console.log(`You've: (${d.toFixed()}) Days, and (${m.toFixed()}) Month, and (${y.toFixed()}) Years Old`)
}

let on = true

while(on){
    document.getElementById("sound").play()
    on = false
}