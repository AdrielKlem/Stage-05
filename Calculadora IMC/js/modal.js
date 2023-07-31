export const Modal = {
    wrapper: document.querySelector(".modal-wrapper"),
    message: document.querySelector(".modal .title span"),
    buttonClose: document.querySelector(".modal button.close"),

    open() {Modal.wrapper.classList.add('open')}, 
    //open: function() {},
    close() {Modal.wrapper.classList.remove('open')}
    //close: function() {},
}

//Fechar caixa
Modal.buttonClose.onclick = () => Modal.close()

window.addEventListener("keydown", handleKeyDown)

function handleKeyDown(event) {
    if(event.key==='Escape') {
        Modal.close()
    }
}