// var global
const form = document.querySelector('form')
const inputWeight = document.querySelector("#weight")
const inputHeight = document.querySelector("#height")
const modalWrapper = document.querySelector(".modal-wrapper")
const modalMessage = document.querySelector(".modal .title span")
const modalBtnClose = document.querySelector(".modal button.close")

form.onsubmit = (event) => {
    event.preventDefault()

    const weight = inputWeight.value
    const height = inputHeight.value
    
    modalMessage.innerHTML = `Seu IMC é os ${IMC(weight,height)}`

   Modal.open()
}

function IMC(weight, height) {
    return (weight /((height / 100)**2)).toFixed(2)
}       