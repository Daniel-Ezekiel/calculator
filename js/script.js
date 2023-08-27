'use strict';

// Query Selectors
const calculator = document.querySelector('.calculator');
const screen = document.querySelector('.screen');
const point = document.querySelector('.point');
const nums = document.querySelectorAll('.num');
const operations = document.querySelectorAll('.operation');
const btnDelete = document.querySelector('.btn-delete');
const btnReset = document.querySelector('.btn-reset');
const btnEvaluate = document.querySelector('.btn-evaluate');

// Calculator Class
class Calc {
  firstOperand = '';
  secondOperand = '';
  operation = '';

  constructor() {
    point.addEventListener('click', this.setupDecimal.bind(this));
    nums.forEach(num =>
      num.addEventListener('click', this.setupOperands.bind(this))
    );
    operations.forEach(operation =>
      operation.addEventListener('click', this.setupOperation.bind(this))
    );
    btnDelete.addEventListener('click', this.delete.bind(this));
    btnReset.addEventListener('click', this.reset.bind(this));
    btnEvaluate.addEventListener('click', this.evaluate.bind(this));
    //   e.preventDefault();
    //   const targetEl = e.target;

    //   if (targetEl.classList.contains('num'))
    //     this.secondOperand += targetEl.textContent.trim();

    //   if (
    //     targetEl.classList.contains('point') &&
    //     !this.secondOperand.includes('.')
    //   )
    //     this.secondOperand += targetEl.textContent.trim();

    //   if (targetEl.classList.contains('operation')) {
    //     this.firstOperand && this.secondOperand && this.evaluate();
    //     this.operation = targetEl.dataset.operation;
    //     this.secondOperand && (this.firstOperand = this.secondOperand);
    //     this.secondOperand = '';
    //   }

    //   // Delete num value
    //   if (targetEl.classList.contains('btn-delete')) this.delete();
    //   // Reset calcullator values
    //   if (targetEl.classList.contains('btn-reset')) this.reset();
    //   // Evaluate operands
    //   if (targetEl.classList.contains('btn-evaluate'))
    //     this.firstOperand && this.secondOperand && this.evaluate();

    //   screen.value = this.secondOperand;
    // });
  }

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

  evaluate() {
    if (this.firstOperand && this.secondOperand) {
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
    }

    this.firstOperand = '';
    this.updateScreen();
  }

  delete() {
    this.secondOperand = this.secondOperand.toString().slice(0, -1);
    this.updateScreen();
  }

  reset() {
    this.firstOperand = '';
    this.secondOperand = '';
    this.operator = '';
    this.updateScreen();
  }

  setupDecimal(e) {
    if (!this.secondOperand.includes('.'))
      this.secondOperand += e.target.textContent.trim();
    this.updateScreen();
  }

  setupOperands(e) {
    this.secondOperand += e.target.textContent.trim();
    this.updateScreen();
  }

  setupOperation(e) {
    this.evaluate();
    this.operation = e.target.dataset.operation;
    this.secondOperand && (this.firstOperand = this.secondOperand);
    this.secondOperand = '';
    this.updateScreen();
  }

  updateScreen() {
    screen.value = this.secondOperand;
  }
}
const newCalc = new Calc();

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
