'use strict';
let modal = document.querySelector ('.modal');
let closeModal = document.querySelector ('.close-modal');
let overlayHidden = document.querySelector ('.overlay-hidden');
let btnOpenModal = document.querySelectorAll ('.show-modal');

console.log (btnOpenModal);

let displayModal= function (modaler, background){
    let modal = document.querySelector('.modal');
    modal.style.display = `${modaler}`;
    modal.style.backgroundColor = `${background}`;
}

// A for Loop To specify each click of a button
for (let i = 0; i < btnOpenModal.length; i++) {
    btnOpenModal[i].addEventListener('click', function (){
        if (btnOpenModal[i].textContent == 'Show modal 1') {
          displayModal('block', 'pink');
          // modal.style.display = 'block';
        }else if (btnOpenModal[i].textContent == 'Show modal 2') {
          displayModal('block', 'red');

          // modal.style.display = 'block';
          // modal.style.backgroundColor = 'red';
        }else if (btnOpenModal[i].textContent == 'Show modal 3') {
            displayModal('block', 'orange');
            
            // modal.style.display = 'block';
            // modal.style.backgroundColor = 'orange';
        }else {
            alert('nopeeee👹')
        }
    })

    closeModal.addEventListener('click', function() {
        modal.style.display = 'none';
        displayModal('','none')
    })
    // if (btnOpenModal[0].textContent = 'Show modal 1'){
    //     btnOpenModal[0].addEventListener ('onclick', function() {modal.style.display ='visible';});
    //     }
    }

