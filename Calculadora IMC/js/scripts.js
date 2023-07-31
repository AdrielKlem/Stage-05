import { Modal } from './modal.js'

// var global
const form = document.querySelector('form')
const inputWeight = document.querySelector("#weight")
const inputHeight = document.querySelector("#height")

form.onsubmit = (event) => {
    event.preventDefault()

    const weight = inputWeight.value
    const height = inputHeight.value
    
   Modal.message.innerHTML = `Seu IMC é os ${IMC(weight,height)}`
   Modal.open()
}

function IMC(weight, height) {
    return (weight /((height / 100)**2)).toFixed(2)
}       