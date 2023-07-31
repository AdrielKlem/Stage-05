import { Modal } from './modal.js'
import { alertError } from './alert-error.js'
import { calculateIMC, notNumber } from './utils.js'

const form = document.querySelector('form')
const inputWeight = document.querySelector("#weight")
const inputHeight = document.querySelector("#height")

form.onsubmit = (event) => {
    event.preventDefault()

    const weight = inputWeight.value
    const height = inputHeight.value

    const weightOrHeightIsNotANumber = notNumber(weight) || notNumber(height)

    if(weightOrHeightIsNotANumber) {
        alertError.open()
        return;
    }
   alertError.close()

   const result = calculateIMC(weight,height)
   displayResultMessage(result)
}

form.oninput = () => alertError.close()

function displayResultMessage(result) {
    Modal.message.innerHTML = `Seu IMC é os ${result}`
    Modal.open()
}