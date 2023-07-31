export const Modal = {
    open() {
    modalWrapper.classList.add('open')
        
    }, 
    //open: function() {},
    close() {
        modalWrapper.classList.remove('open')
    }
    //close: function() {},
}

modalBtnClose.onclick = () => Modal.close()