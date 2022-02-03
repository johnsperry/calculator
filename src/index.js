class Calculator {
  constructor(prevField, currField) {
    this.prevFied = prevField
    this.currField = currField
    this.clear()
  }

  clear() {
    this.currField = ''
    this.prevFied = ''
    this.operation = undefined
  }

  delete() {}

  append(number) {}

  chooseOperation(operation) {}
  compute() {}

  updateDisplay() {}
}

const numberButtons = document.querySelectorAll('[data-number]')
const operationsButtons = documnet.querySelectorAll('[data-operation]')
const equalsButton = document.querySelector('[data-equals')
const deleteButton = document.querySelector('[data-del')
const acButton = document.querySelector('[data-ac')
const prevField = document.querySelector('[data-prev')
const currField = document.querySelector('[data-curr')

const calculator = newCalculator(prevField, currField)

numberButtons
