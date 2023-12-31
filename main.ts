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

  // set x and y axis to 0
  xAxis = 0
  yAxis = 0
  sprite = game.createSprite(xAxis, yAxis)

  // loop until x axis is greater than 4
  while (xAxis <= 4) {
    basic.pause(500)

    // make pixels light up diagnally
    sprite.set(LedSpriteProperty.X, xAxis)
    sprite.set(LedSpriteProperty.Y, yAxis)

    xAxis = xAxis + 1
    yAxis = yAxis + 1
  }

  basic.pause(500)
  sprite.delete()
})

input.onButtonPressed(Button.B, function () {
  basic.clearScreen()

  // set x axis to 0 and y axis to 4
  xAxis = 0
  yAxis = 4
  sprite = game.createSprite(xAxis, yAxis)

  // loop until x axis is greater than 4
  while (xAxis <= 4 || yAxis >= 0) {
    basic.pause(500)
    basic.clearScreen()

    // make pixels light up diagnally
    sprite.set(LedSpriteProperty.X, xAxis)
    sprite.set(LedSpriteProperty.Y, yAxis)

    xAxis = xAxis + 1
    yAxis = yAxis - 1
  }

  basic.pause(500)
  sprite.delete()
})
