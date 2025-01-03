# Firebase initializeApp Error: Multiple Configurations

This repository demonstrates a common but subtle error when using the Firebase JavaScript SDK: calling `firebase.initializeApp()` multiple times with different configuration objects.

## The Problem
Calling `firebase.initializeApp()` repeatedly, even with seemingly minor configuration differences, can lead to unpredictable behavior and obscure error messages. The SDK might not explicitly state the root cause, making debugging challenging.

## Solution
Ensure `firebase.initializeApp()` is called only once. If you need to use multiple Firebase projects, initialize them separately and manage them distinctly.  This example shows how to conditionally initialize based on environment variables or other criteria.

## How to Reproduce
1. Clone this repository.
2. Run the `multipleConfigBug.js` file. Observe the error.
3. Run the `multipleConfigSolution.js` file.  The code should run without error, showcasing the fix.
