'use strict';

// Query Selectors
const calculator = document.querySelector('.calculator');
const screen = document.querySelector('.screen');
const nums = document.querySelectorAll('.num');
const operators = document.querySelectorAll('.operator');
const btnDel = document.querySelector('.btn-delete');
const btnReset = document.querySelector('.btn-reset');

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

  if (targetEl.classList.contains('num')) {
    newCalc.secondOperand += targetEl.textContent.trim();
  }

  if (
    targetEl.classList.contains('point') &&
    !newCalc.secondOperand.includes('.')
  ) {
    newCalc.secondOperand += targetEl.textContent.trim();
  }

  if (targetEl.classList.contains('operation')) {
    newCalc.firstOperand && newCalc.secondOperand && newCalc.eval();
    newCalc.operation = targetEl.dataset.operation;
    newCalc.firstOperand = newCalc.secondOperand;
    newCalc.secondOperand = '';
  }

  if (targetEl.classList.contains('btn-delete')) {
    newCalc.delete();
  }

  if (targetEl.classList.contains('btn-reset')) {
    newCalc.reset();
  }

  if (targetEl.classList.contains('evaluate')) {
    newCalc.firstOperand && newCalc.secondOperand && newCalc.eval();
  }

  screen.value = newCalc.secondOperand;
  console.log(newCalc.firstOperand, newCalc.secondOperand);
});

// class Calc {
//   add() {}
//   subtract() {}
//   multiply() {}
//   divide() {}
//   evaluate() {}
// }
