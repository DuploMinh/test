binary = ""
decimal_or_hex = True;
def on_gesture_shake():
    global decimal_or_hex
    decimal_or_hex = not decimal_or_hex
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
    decimal = int(binary, 2)
    if decimal_or_hex:
       basic.show_number(decimal) 
    else:
        basic.show_number(decimal)
input.on_button_pressed(Button.AB, ab_pressed)