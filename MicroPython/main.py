"""
Created by: Michael Bruneau
Created on: Nov 2023
This module is a Micro:bit MicroPython program
"""

from microbit import *

# variables
x_axis = 0
y_axis = 0

# setup
display.show(Image.HAPPY)
sleep(500)
display.clear()

while True:
    if button_a.is_pressed():
        display.clear()

        x_axis = 0
        y_axis = 0

        while x_axis <= 4:
            sleep(500)
            display.clear()

            display.set_pixel(x_axis, y_axis, 9)

            x_axis = x_axis + 1
            y_axis = y_axis + 1

    if button_b.is_pressed():
        display.clear()

        x_axis = 0
        y_axis = 4

        while x_axis <= 4:
            sleep(500)
            display.clear()

            display.set_pixel(x_axis, y_axis, 9)

            x_axis = x_axis + 1
            y_axis = y_axis - 1
