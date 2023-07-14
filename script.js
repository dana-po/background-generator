let css = document.querySelector('h3');
let firstColor = document.getElementById('firstColor');
let secondColor = document.getElementById('secondColor');
let body = document.getElementById('gradient');

let setGradient = function () {
  body.style.background =
    'linear-gradient(to right, ' +
    firstColor.value +
    ', ' +
    secondColor.value +
    ')';
  css.textContent = body.style.background + ';';
};
firstColor.addEventListener('input', setGradient);

secondColor.addEventListener('input', setGradient);
