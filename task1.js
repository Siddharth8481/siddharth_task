// Create a simple Node.js script that reads user input from the console and prints it back.

const readline = require("readline");

const response = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

response.question("please enter input :", (input) => {
  console.log(`Your input is ${input}`);
  response.close();
});

// ==============================================
// ---------Explain the concept of callback functions in Node.js.--------

// Callback function is a function that's passed as an arugument to another function and execute later when another function completed the task.
// in node js used for read and write file also

function hello(name, callback) {
  console.log("hello", name);
  callback();
}

function world() {
  console.log("world");
}

hello("siddharth", world);

// here is the example
