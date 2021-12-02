let binary = ""
let decimal_or_hex = true
function decToHex(dec_value: number): string {
    let hex_value: any;
    let ret_val = ""
    while (dec_value > 0) {
        hex_value = dec_value % 16
        dec_value = Math.idiv(dec_value, 16)
        ret_val = getHexChar(hex_value) + ret_val
    }
    return ret_val
}

function getHexChar(dec_digit: any): string {
    if (dec_digit < 10) {
        return "" + dec_digit
    }
    
    if (dec_digit == 10) {
        return "A"
    }
    
    if (dec_digit == 11) {
        return "B"
    }
    
    if (dec_digit == 12) {
        return "C"
    }
    
    if (dec_digit == 13) {
        return "D"
    }
    
    if (dec_digit == 14) {
        return "E"
    }
    
    if (dec_digit == 15) {
        return "F"
    }
    
    return ""
}

input.onGesture(Gesture.Shake, function on_gesture_shake() {
    
    decimal_or_hex = !decimal_or_hex
    basic.showString("" + decimal_or_hex)
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
    let hexa = decToHex(decimal)
    if (decimal_or_hex) {
        basic.showNumber(decimal)
    } else if (!decimal_or_hex) {
        basic.showString(hexa)
    }
    
})
input.onLogoEvent(TouchButtonEvent.Pressed, function on_logo_event_pressed() {
    let binary = ""
})
