import { Modal } from './modal.js'
import { alertError } from './alert-error.js'

// var global
const form = document.querySelector('form')
const inputWeight = document.querySelector("#weight")
const inputHeight = document.querySelector("#height")

form.onsubmit = (event) => {
    event.preventDefault()

    const weight = inputWeight.value
    const height = inputHeight.value

    const showAlertError = notNumber(weight) || notNumber(height)

    if(showAlertError) {
        alertError.open()
        return;
    }
   alertError.close()
       
   Modal.message.innerHTML = `Seu IMC é os ${IMC(weight,height)}`
   Modal.open()
}

function notNumber(value) {
    return isNaN(value) || value.length == 0
}

function IMC(weight, height) {
    return (weight /((height / 100)**2)).toFixed(2)
}       