const btnDec = document.querySelector('button[data-action="decrement"]');
const btnInc = document.querySelector('button[data-action="increment"]');
const counter = document.querySelector('#value');

let counterValue = 0;

btnDec.addEventListener('click', () => {
    counterValue -= 1;
    counter.textContent = counterValue;
});

btnInc.addEventListener('click', () => {
    counterValue += 1;
    counter.textContent = counterValue;
});