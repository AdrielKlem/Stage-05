// Var
let RNumber = RandomNumber(0,10)
let xAttemps = 1
const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
const result = document.querySelector(".screen2 h2")
const btnTry = document.querySelector("#btnTry")
const btnReset = document.querySelector("#btnReset")


console.log(RNumber)


/* Eventos */
// função callback
function handleTryClick(event) {
    event.preventDefault() // não faça o padrão

    let inputNumber = document.querySelector('#inputNumber')

    if (Number(inputNumber.value) == RNumber) {
        toggleScreen()
        result.innerHTML = `Acertou em ${xAttemps} tentativas`
    } 

    inputNumber.value = ""
    xAttemps++
}

function handleResetClick(event) {
    toggleScreen()
    xAttemps = 1
    RNumber = RandomNumber(0,10)
}

function toggleScreen() {
    screen1.classList.toggle('hide')
    screen2.classList.toggle('hide')
}
 
function RandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}

btnTry.addEventListener('click',handleTryClick)
btnReset.addEventListener('click',handleResetClick)