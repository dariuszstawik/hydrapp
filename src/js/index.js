import '../scss/main.scss';

// uncomment the lines below to enable PWA
import {registerSW} from './pwa.js';
registerSW();


const buttonAdd = document.querySelector('.app__button-add--js');

const buttonRemove = document.querySelector('.app__button-remove--js');

const cupCounter = document.querySelector('.app__cup__counter--js'); 

let counter = 0;

const key = new Date().toISOString().slice(0,10);

let localStorageValue = localStorage.getItem(key);

console.log(localStorageValue);

if (localStorageValue) {
    counter = localStorageValue;
}

else {
    counter = 0;
}

console.log(counter);

localStorage.setItem(key, counter);

let addCup = () => {
    counter++
    cupCounter.innerHTML = counter;    
    localStorage.setItem(key, counter);
}

let removeCup = () => {
    
    if (counter > 0) {
        counter--
        cupCounter.innerHTML = counter;
        localStorage.setItem(key, counter);
    }    
}

buttonAdd.addEventListener('click', addCup);
buttonRemove.addEventListener('click', removeCup);