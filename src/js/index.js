import '../scss/main.scss';

// uncomment the lines below to enable PWA
// import {registerSW} from './pwa.js';
// registerSW();

/* place your code below */

console.log('HELLO 🚀')

const buttonadd = document.querySelector('.app__button-add--js');

const counterPresent = document.querySelector('.app__cup__counter--js')

let counter = 0;

    const myClick = () => {
        console.log('kliknąłeś');
        counter++
        console.log(counter);
        counterPresent.innerHTML = counter;
        
    }

    buttonadd.addEventListener('click', myClick);
