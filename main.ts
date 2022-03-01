input.onButtonPressed(Button.A, function () {
    number1 += 1
    basic.showNumber(number1)
})
input.onButtonPressed(Button.AB, function () {
    total = number1 + nomber2
    basic.showNumber(total)
})
input.onButtonPressed(Button.B, function () {
    nomber2 += 1
    basic.showNumber(nomber2)
})
input.onGesture(Gesture.Shake, function () {
    total = number1 - nomber2
    basic.showNumber(total)
})
let total = 0
let nomber2 = 0
let number1 = 0
number1 = 0
nomber2 = 0
total = 0
