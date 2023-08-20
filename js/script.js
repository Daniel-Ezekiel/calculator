'use strict';

// Query Selectors
const calculator = document.querySelector('.calculator');
const screen = document.querySelector('.screen');

// Calculator Class
class Calc {
  firstOperand = '';
  secondOperand = '';
  operation = '';

  add() {
    this.secondOperand = Number(this.firstOperand) + Number(this.secondOperand);
  }

  subtract() {
    this.secondOperand = Number(this.firstOperand) - Number(this.secondOperand);
  }

  multiply() {
    this.secondOperand = Number(this.firstOperand) * Number(this.secondOperand);
  }

  divide() {
    this.secondOperand = Number(this.firstOperand) / Number(this.secondOperand);
  }

  eval() {
    switch (this.operation) {
      case 'plus':
        this.add();
        break;
      case 'minus':
        this.subtract();
        break;
      case 'times':
        this.multiply();
        break;
      case 'divide':
        this.divide();
        break;
    }

    this.firstOperand = '';
  }

  delete() {
    this.secondOperand = this.secondOperand.toString().slice(0, -1);
  }

  reset() {
    this.firstOperand = '';
    this.secondOperand = '';
    this.operator = '';
  }
}
const newCalc = new Calc();

calculator.addEventListener('click', e => {
  e.preventDefault();
  const targetEl = e.target;

  if (targetEl.classList.contains('num'))
    newCalc.secondOperand += targetEl.textContent.trim();

  if (
    targetEl.classList.contains('point') &&
    !newCalc.secondOperand.includes('.')
  )
    newCalc.secondOperand += targetEl.textContent.trim();

  if (targetEl.classList.contains('operation')) {
    newCalc.firstOperand && newCalc.secondOperand && newCalc.eval();
    newCalc.operation = targetEl.dataset.operation;
    newCalc.secondOperand && (newCalc.firstOperand = newCalc.secondOperand);
    newCalc.secondOperand = '';
  }

  // Delete num value
  if (targetEl.classList.contains('btn-delete')) newCalc.delete();
  // Reset calcullator values
  if (targetEl.classList.contains('btn-reset')) newCalc.reset();
  // Evaluate operands
  if (targetEl.classList.contains('evaluate'))
    newCalc.firstOperand && newCalc.secondOperand && newCalc.eval();

  screen.value = newCalc.secondOperand;
});

// Theme Toggler
let defaultTheme = 0;

const body = document.querySelector('body');
const themeToggler = document.querySelector('.theme-toggler');

themeToggler.addEventListener('click', e => {
  e.preventDefault();
  defaultTheme++;
  if (defaultTheme > 2) defaultTheme = 0;

  themeToggler.querySelector(
    '.btn-toggle-theme'
  ).style.transform = `translateX(${defaultTheme * 125}%)`;

  themeToggler.querySelector(
    '.btn-toggle-theme'
  ).style.transition = `all 0.4s ease-in-out`;

  body.setAttribute('id', `theme${defaultTheme + 1}`);
});
