'use strict';


const pinComponent = document.getElementById('pin-component');
const btnComponent = document.getElementById('btn-component');
const successBlock = document.getElementById('success_id_block');
const failedBlock = document.getElementById('failed_id_block');
const pinLength = 6;
const pinResult = ['1', '1', '1', '1', '1', '1'];
let inputResult = [];


const checkInputLength = () => {
    return inputResult.length === pinResult.length ? true : false;
}

const compateInputValue = () => {
    return inputResult.toString() === pinResult.toString() ? true : false;
}

const clearInputResult = () => {
    inputResult.splice(0, pinResult.length);
    for (let item of pinComponent.childNodes) {
        item.style.backgroundColor = 'white';
    }
}

const showFailedMessage = () => {
    successBlock.style.display = 'none';
    failedBlock.style.display = 'block';
}

const showSuccessMessage = () => {
    failedBlock.style.display = 'none';
    successBlock.style.display = 'block';
}

function createPinItems () {
    for (let index = 0; index < pinLength; index++) {
        const pinItem = document.createElement('div');
        pinItem.classList = 'pin-item';
        pinItem.id = `pin_id_${index}`;
        pinComponent.appendChild(pinItem);
    }
}


function createBtnItems () {
    for (let index = 1; index < 10; index++) {
        const btn = document.createElement('div');
        btn.classList = 'btn-item';
        btn.innerText = index;
        btn.onclick = (event) => {
            inputResult.push(event.target.innerText);
            const pinItem = document.getElementById(`pin_id_${inputResult.length - 1}`);
            pinItem.style.backgroundColor = 'red';

            if (checkInputLength()) {
                if (compateInputValue()) {
                    setTimeout(clearInputResult, 1000)
                    showSuccessMessage();
                } else {
                    setTimeout(clearInputResult, 1000)
                    showFailedMessage();
                }
            } else {
                
            }
        }

        btnComponent.appendChild(btn);
    }
}


window.onload = () => {
    createPinItems();
    createBtnItems();
}