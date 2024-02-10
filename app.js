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