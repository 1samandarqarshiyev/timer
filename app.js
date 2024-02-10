// setTimeout

// setTimeout(function, time)

// setTimeout(() => {
//     console.log("Hello Guys")
// }, 4000);

// function callMe() {
//     console.log("Hello Guys!")
// }
// setTimeout(callMe, 4000)

// setInterval

// let a = 0
// let timerInterval = setInterval(() => {
//     a++
//     console.log(a)
// }, 1000);

// setTimeout(() => {
//     clearInterval(timerInterval)
//     // clearTimeout(timerInterval)
// }, 10000)


// function clearTime() {
//     const x = "Hi, JS"
//     console.log(x)
// }
// // setTimeout(clearTime, 4000)
// setInterval(clearTime, 1000)
// clearTimeout(clearTime, 4000)


// UYGA VAZIFA

const timer = document.querySelector('#timer')
const timerNumber = document.querySelector('#number')
const btn1 = document.querySelector('#btn1')
const btn2 = document.querySelector('#btn2')

let number = 0
let start
let count = true

function btnClick1 () {
    if (count) {
        start = setInterval(() => {
            number++
            timerNumber.textContent = number
        }, 1000)
        count = !count
    }
}

function btnClick2 () {
    clearInterval(start)
    count = !count
}

btn1.addEventListener('click', btnClick1)
btn2.addEventListener('click', btnClick2)