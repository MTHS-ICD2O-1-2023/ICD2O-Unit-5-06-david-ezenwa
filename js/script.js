// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Mr. Coxall
// Created on: Sep 2020
// This file contains the JS functions for index.html

"use strict"

function multiplyUsingAddition() {
  let num1 = parseInt(document.getElementById("integer1").value)
  let num2 = parseInt(document.getElementById("integer2").value)

  let result = 0
  let count = 0

  // Handle negative numbers
  const isNegative = (num1 < 0) !== (num2 < 0) // Result should be negative if only one number is negative
  num1 = Math.abs(num1)
  num2 = Math.abs(num2)

  while (count < num2) {
    result += num1
    count++
  }

  // Apply negative sign if needed
  if (isNegative) {
    result = -result
  }

  document.getElementById("answer").innerHTML = `The result of multiplication is: ${result}`
}
