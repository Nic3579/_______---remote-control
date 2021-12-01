def on_button_pressed_a():
    radio.send_value("rz557g", 2473 * 3821)
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_b():
    radio.send_value("rz557g", 2897 * 3821)
input.on_button_pressed(Button.B, on_button_pressed_b)

def on_received_value(name, value):
    if True:
        pass
radio.on_received_value(on_received_value)

radio.set_group(1)

def on_forever():
    basic.show_leds("""
        . . . . .
                . . . . .
                . . . . .
                . . . . .
                . . . . .
    """)
    basic.show_leds("""
        . . . . .
                . . . . .
                . . # . .
                . . . . .
                . . . . .
    """)
    basic.pause(200)
basic.forever(on_forever)
