const RNumber = RandomNumber(0,10)
const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")


function handleClick(event) {
    event.preventDefault()

    let inputNumber = Number(document.querySelector('#inputNumber').value)

    if (inputNumber != RNumber) {
        screen1.classList.toggle('hide')
        screen2.classList.toggle('hide')
    } 
}

function RandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}
