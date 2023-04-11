const plusins = document.querySelector('.js-plus');
const multiply = document.querySelector('.js-multiply');
const minus = document.querySelector('.js-minus');
const divide = document.querySelector('.js-divide');
const inputins1 = document.querySelector('.js-input1');
const inputins2 = document.querySelector('.js-input2');
const answer = document.querySelector('.js-result');

const Add = (cipars1, cipars2) => {
    return cipars1 + cipars2
}

const Subtract = (cipars1, cipars2) => {
    return cipars1 - cipars2
}

const Multiply = (cipars1, cipars2) => {
    return cipars1 * cipars2
}

const Divide = (cipars1, cipars2) => {
    return cipars1 / cipars2
}

plusins.addEventListener('click', () => {
    answer.textContent = Add(parseInt(inputins1.value),parseInt(inputins2.value))

    inputins1.value = ""
    inputins2.value = ""
})
