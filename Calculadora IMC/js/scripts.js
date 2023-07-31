import { Modal } from './modal.js'
import { alertError } from './alert-error.js'
import { IMC, notNumber } from './utils.js'

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