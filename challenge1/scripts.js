let firstNumber = prompt('Digite o primeiro número:')
let secondNumber = prompt('Digite o segundo número:')

firstNumber = Number(firstNumber) 
secondNumber = Number(secondNumber)

let checkEquals = firstNumber == secondNumber ? 'são iguais' : 'são diferentes'

let sum = (firstNumber + secondNumber)

let evenOrOdd = firstNumber % secondNumber == 0 ? 'par' : 'ímpar'

let sub = (firstNumber - secondNumber)
let multi = (firstNumber * secondNumber)
let div = (firstNumber / secondNumber)
let restDiv = (firstNumber % secondNumber)

alert(`Os dois números inseridos ${checkEquals}`)
alert(`A soma dos dois números é ${sum}`)
alert(`A soma dos dois números é ${evenOrOdd}`)
alert(`A subtração dos dois números é ${sub}`)
alert(`A multiplicação dos dois números é ${multi}`)
alert(`A divisão dos dois números é ${div}`)
alert(`O resto da divisão dos dois números é ${restDiv}`)