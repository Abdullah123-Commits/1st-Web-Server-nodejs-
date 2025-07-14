// // console.log(global); just to test environment

// const { generateRandomNumber, celciusToFahrenheit } = require('./utils');
// console.log(`Random Number: ${generateRandomNumber()}`);

// console.log(`Celcius To Fahrenheit: ${celciusToFahrenheit(0)}`);

// PAUSE WILL RESUME FROM IMPORTING POSTS METHOD FROM POST CONTROLLER FILE
import { getPosts } from "./postController.js";
console.log(getPosts());