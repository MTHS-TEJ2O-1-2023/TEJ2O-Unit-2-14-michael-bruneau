/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Michael Bruneau
 * Created on: Nov 2023
 * This program does shows diagnals on microbit 
*/

// variables
let sprite: game.LedSprite = null
let xAxis: number = 0
let yAxis: number = 0

// setup
basic.showIcon(IconNames.Happy)
basic.pause(500)
basic.clearScreen()

input.onButtonPressed(Button.A, function () {
  basic.clearScreen()
  xAxis = 0
  yAxis = 0
  sprite = game.createSprite(xAxis, yAxis)

  while (xAxis <= 4) {
    basic.pause(500)

    sprite.set(LedSpriteProperty.X, xAxis)
    sprite.set(LedSpriteProperty.Y, yAxis)

    xAxis = xAxis + 1
    yAxis = yAxis + 1
  }
})

input.onButtonPressed(Button.B, function () {
    basic.clearScreen()
    xAxis = 0
    yAxis = 4
    sprite = game.createSprite(xAxis, yAxis)

    while (xAxis <= 4) {
        basic.pause(500)

        sprite.set(LedSpriteProperty.X, xAxis)
        sprite.set(LedSpriteProperty.Y, yAxis)

        xAxis = xAxis + 1
        yAxis = yAxis - 1
    }
})
