binary = ""              
decimal_or_hex = True;
def decToHex(dec_value):
    ret_val = ""
    while dec_value > 0:
        hex_value=dec_value%16
        dec_value=dec_value//16
        ret_val = getHexChar(hex_value) + ret_val
    return ret_val
def getHexChar(dec_digit):
    if dec_digit < 10:
        return str(dec_digit)
    if dec_digit == 10:
        return "A"
    if dec_digit == 11:
        return "B"
    if dec_digit == 12:
        return "C"
    if dec_digit == 13:
        return "D"
    if dec_digit == 14:
        return "E"
    if dec_digit == 15:
        return "F"
    return ""
def on_gesture_shake():
    global decimal_or_hex
    decimal_or_hex = not decimal_or_hex
    basic.show_string(str(decimal_or_hex))
input.on_gesture(Gesture.SHAKE, on_gesture_shake)
def a_pressed():
    global binary
    binary = binary + "1"
    basic.show_string(binary)
input.on_button_pressed(Button.A, a_pressed)
def b_pressed():
    global binary
    binary = binary + "0"
    basic.show_string(binary)
input.on_button_pressed(Button.B, b_pressed)
def ab_pressed():
    global decToHex
    decimal = int(binary, 2)
    hexa = decToHex(decimal)
    if decimal_or_hex:
       basic.show_number(decimal) 
    elif not decimal_or_hex:
        basic.show_string(hexa)
input.on_button_pressed(Button.AB, ab_pressed)
def on_logo_event_pressed():
    binary = ""
input.on_logo_event(TouchButtonEvent.PRESSED, on_logo_event_pressed)
