let binary = ""
let decimal_or_hex = true
input.onGesture(Gesture.Shake, function on_gesture_shake() {
    
    decimal_or_hex = !decimal_or_hex
})
input.onButtonPressed(Button.A, function a_pressed() {
    
    binary = binary + "1"
    basic.showString(binary)
})
input.onButtonPressed(Button.B, function b_pressed() {
    
    binary = binary + "0"
    basic.showString(binary)
})
input.onButtonPressed(Button.AB, function ab_pressed() {
    let decimal = parseInt(binary, 2)
    if (decimal_or_hex) {
        basic.showNumber(decimal)
    } else {
        basic.showNumber(decimal)
    }
    
})
