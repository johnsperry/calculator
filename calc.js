class Calculator {
  constructor(prevField, currField) {
    this.prevField = prevField
    this.currField = currField
    this.clear()
  }

  clear() {
    this.currText = ''
    this.prevText = ''
    this.operation = undefined
  }

  delete() {
    this.currText = this.currText.slice(0, this.currText.length - 1)
  }

  append(x) {
    if (x === '.' && this.currText.includes('.')) return
    this.currText = this.currText.toString() + x.toString()
  }

  chooseOperation(operation) {
    if (this.currText === '') return
    if (this.prevText !== '') this.compute()
    this.operation = operation
    this.prevText = this.currText
    this.currText = ''
  }
  compute() {
    let computation
    const prev = parseInt(this.prevText)
    const curr = parseInt(this.currText)
    if (isNaN(curr) || isNaN(prev)) return
    switch (this.operation) {
      case '+':
        computation = prev + curr
        break
      case '-':
        computation = prev - curr
        break
      case '/':
        computation = prev / curr
        break
      case '*':
        computation = prev * curr
        break
      default:
        return
    }
    this.currText = computation
    this.operation = undefined
    this.prevText = ''
  }

  updateDisplay() {
    this.currField.innerText = this.currText
    this.prevField.innerText = this.prevText
  }
}

const numberButtons = document.querySelectorAll('[data-number]')
const operationsButtons = document.querySelectorAll('[data-operation]')
const equalsButton = document.querySelector('[data-equals')
const deleteButton = document.querySelector('[data-del')
const acButton = document.querySelector('[data-ac')
const prevField = document.querySelector('[data-previous')
const currField = document.querySelector('[data-current')

const calculator = new Calculator(prevField, currField)

numberButtons.forEach((button) => {
  button.addEventListener('click', () => {
    calculator.append(button.innerText)
    calculator.updateDisplay()
  })
})
operationsButtons.forEach((button) => {
  button.addEventListener('click', () => {
    calculator.chooseOperation(button.innerText)
    calculator.updateDisplay()
  })
})

equalsButton.addEventListener('click', () => {
  calculator.compute()
  calculator.updateDisplay()
})
deleteButton.addEventListener('click', () => {
  calculator.delete()
  calculator.updateDisplay()
})
acButton.addEventListener('click', () => {
  calculator.clear()
  calculator.updateDisplay()
})
