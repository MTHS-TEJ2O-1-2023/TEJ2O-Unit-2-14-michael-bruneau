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

# loop
while True:
    if button_a.is_pressed():
        display.clear()

        # set x and y axis to 0
        x_axis = 0
        y_axis = 0

        # loop until x axis is greater than 4
        while x_axis <= 4:
            sleep(500)
            display.clear()

            # make pixels light up diagnally
            display.set_pixel(x_axis, y_axis, 9)

            x_axis = x_axis + 1
            y_axis = y_axis + 1

        sleep(500)
        display.clear()

    if button_b.is_pressed():
        display.clear()

        # set x axis to 0 and y axis to 4
        x_axis = 0
        y_axis = 4

        # loop until x axis is greater than 4
        while x_axis <= 4:
            sleep(500)
            display.clear()

            display.set_pixel(x_axis, y_axis, 9)

            # make pixels light up diagnally
            x_axis = x_axis + 1
            y_axis = y_axis - 1

        sleep(500)
        display.clear()
