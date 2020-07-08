function reset() {
    console.log("reset")
    document.getElementById("result").innerHTML = "0"
}
let x = 0
function plusOne() {
    console.log("+1")
    x += 1
    document.getElementById("result").innerHTML = x
}
function minusone() {
    console.log("-1")
    x -= 1
    document.getElementById("result").innerHTML = x
}
function plus10() {
    console.log("-1")
    x += 10
    document.getElementById("result").innerHTML = x
}
function minus10() {
    console.log("-10")
    x -= 10
    document.getElementById("result").innerHTML = x
}
function plushundert() {
    console.log("+100")
    x += 100
    document.getElementById("result").innerHTML = x
}
function minushundert() {
    console.log("-100")
    x -= 100
    document.getElementById("result").innerHTML = x
}
function double() {
    console.log("*2")
    x *= 2
    document.getElementById("result").innerHTML = x
}