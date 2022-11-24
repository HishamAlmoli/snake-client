const { connect } = require("./client");

console.log("Connecting ...");
connect();

// setup interface to handle user input from stdin

const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

const handleUserInput = function (data) {
    if (data === '\u0003') { // ctrl-c
      process.exit();
    }
    if (data === '\u001b[A') {
      connection.write("Move: up");
    };
    if (data === '\u001b[D') {
      connection.write("Move: left");
    };
    if (data === '\u001b[B') {
      connection.write("Move: down");
    };
    if (data === '\u001b[C') {
      connection.write("Move: right");
    };
  };
/*
Here’s the info for the Snek server!
View the snakes : http://165.227.47.243:8000/view
Host: 165.227.47.243
Port: 50541
*/