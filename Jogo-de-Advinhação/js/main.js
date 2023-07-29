// Var
let randomNumber = Math.round(Math.random() * 10)
let xAttemps = 1
const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
const result = document.querySelector(".screen2 h2")
const btnTry = document.querySelector("#btnTry")
const btnReset = document.querySelector("#btnReset")


console.log(randomNumber)


/* Eventos */
btnTry.addEventListener('click',handleTryClick)
btnReset.addEventListener('click',handleResetClick)
document.addEventListener('keypress',(e) => {
    if(e.key=='Enter' && screen1.classList.contains('hide')) {
        handleResetClick()
    }
})

// função callback
function handleTryClick(event) {
    event.preventDefault() // não faça o padrão

    let inputNumber = document.querySelector('#inputNumber')

    if (Number(inputNumber.value) == randomNumber) {
        toggleScreen()
        result.innerHTML = `Acertou em ${xAttemps} tentativas`
    } 

    inputNumber.value = ""
    xAttemps++
}

function handleResetClick() {
    toggleScreen()
    xAttemps = 1
    randomNumber =  Math.round(Math.random() * 10)
    console.log(randomNumber)
}

function toggleScreen() {
    screen1.classList.toggle('hide')
    screen2.classList.toggle('hide')
}